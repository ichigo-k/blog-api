import user from "../models/User.js";

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


function updateUserDetails(req,res,next){
    const id = req.params.id
    const {name,email,username} = req.body
    user.findByIdAndUpdate(id,{name,email,username})
    .then(() => {
        res.status(200).json({
            message:"User updated successfully"
        })
    })
    .catch((error)=>{
        res.status(500).json({
            message:error.message
        })
    })

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

        const FollowUser = await user.findById(id);
        const User = await user.findById(userID);

        if (!FollowUser || !User) {
            return res.status(404).json({ message: "User not found" });
        }

        if (User.following.includes(id)) {
            User.following = User.following.filter(item => item !== id);
            res.status(201).json({ message: "Successfully unfollowed"+ " "+ FollowUser.name });
        } else {
            User.following.push(id);
        }

        if (FollowUser.followers.includes(userID)) {
            res.status(201)
        } else {
            FollowUser.followers.push(userID);
        }

        await user.findByIdAndUpdate(userID, { $set: { following: User.following } }, { new: true });
        await FollowUser.save();

        res.status(201).json({ message: "Successfully followed"+ " "+ FollowUser.name });
    } catch (error) {
        next(error);
    }
}

const userServices ={
    getUserDetails,updateUserDetails,deleteUser,addFollower
}

export default userServices