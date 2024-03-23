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


function updateUserDetails()


const userServices ={
    getUserDetails
}

export default userServices