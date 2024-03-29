import user from "../models/User.js";
import fs from "fs"
import path from "path"
import mime from "mime"

function getUserDetails(req,res,next){
    const id = req.params.id
    user.findById(id)
    .then(data=>{
        const user = {
            name:data.name,
            email:data.email,
            followers:data.followers,
            following:data.following
        }
        res.status(200).json({user:user})
    })
    .catch(err=>{
        res.status(404).json(err.message)
    })
}


async function updateUserDetails(req, res, next) {
    try {
        const { id } = req.params;
        const { name, email, username } = req.body;
        const profilePic = req.filenameData;

        // Step 1: Update user details in the database
        await user.findByIdAndUpdate(id, { name, email, username, profilePic });

        // Step 2: If a profile picture is provided, find all profile pictures in the database
        if (profilePic) {
            const dbProfilePics = await user.find({}, 'profilePic');
            const dbFilenames = dbProfilePics.map(user => user.profilePic);

            // Step 3: Check the upload folder for files that are not in the database
            const dirname = path.dirname(new URL(import.meta.url).pathname);
            const files = await fs.promises.readdir(path.join('./uploads'));
            const orphanedFiles = files.filter(file => !dbFilenames.includes(file));

            // Step 4: Delete old profile pictures not linked to any user
            await Promise.all(orphanedFiles.map(filename => fs.promises.unlink(path.join('./uploads', filename))));
        }

        res.status(200).json({
            message: "User updated successfully"
        });
    } catch (error) {
        console.error("Error updating user:", error);
        res.status(500).json({
            message: error.message
        });
    }
}

function deleteUser(req,res,next){
    const id = req.params.id
    user.findByIdAndDelete(id)
    .then(()=>{
        res.status(200).json({
            message:"User deleted successfully"
        })
    })
    .catch((error)=>{
        res.status(500).json({
            message:error.message
        })
    })

}

async function addFollower(req, res, next) {
    try {
        const { id } = req.params;
        const { userID } = req.body;

        if(!userID || !id){
            return res.status(400).json({ message: userID ? "User ID is required" : "Follower ID is required"});
        }

        const FollowUser = await user.findById(id);
        const User = await user.findById(userID);

        if (!FollowUser | !User) {
            return res.status(404).json({ message: FollowUser ? "User not found" : "Follower not found"});
        }

        if (User.following.includes(id)) {
            User.following = User.following.filter(item => item !== id);
            res.status(201).json({ message: "Successfully unfollowed"+ " "+ FollowUser.name });
        } else {
            User.following.push(id);
        }

        if (FollowUser.followers.includes(userID)) {
            FollowUser.followers = FollowUser.followers.filter(item => item !== userID);
        } else {
            FollowUser.followers.push(userID);
        }

        await user.findByIdAndUpdate(userID, { $set: { following: User.following } }, { new: true });
        await FollowUser.save();

        res.status(201).json({ message: "Successfully followed"+ " "+ FollowUser.name });
    } catch (error) {
        res.status(500).json(error.message)
    }
}


async function getProfilepic(req, res, next) {
   const { name } = req.params;
    try {
        const dirname = path.dirname(new URL(import.meta.url).pathname);
        const file = path.join('./uploads', name);
        let profilePic = fs.readFileSync(file);
        
        // Check if the image exists in the uploads folder 
        if(!fs.existsSync(`./uploads/${name}`)){
            return res.status(404).json({ message: "File not found" });
        }

        // Return the image as a response with its mimetype set to the image's type
        res.type(mime.getType(file));
        return res.send(profilePic);
    } catch (err) {
        console.error("Error getting profile picture:", err);
        return res.status(500).json({ message: err.message });
    }

}

const userServices ={
    getUserDetails,updateUserDetails,deleteUser,addFollower, getProfilepic
}

export default userServices