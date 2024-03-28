import TryCatchWrapper from "../utils/tryCatchWrapper.js"
import userServices from "../services/User.js"

function getUser(req,res,next){
    TryCatchWrapper(
        userServices.getUserDetails(req,res,next)
    )
}

function updateUser(req,res,next){
    TryCatchWrapper(
        userServices.updateUserDetails(req,res,next)
    )
}

function deleteUser(req,res,next){
    TryCatchWrapper(
        userServices.deleteUser(req,res,next)
    )
}

function follow(req,res,next){
    TryCatchWrapper(
        userServices.addFollower(req,res,next)
    )
}


const userControllers = {
    getUser,updateUser,deleteUser,follow
}

export default userControllers