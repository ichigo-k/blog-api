import TryCatchWrapper from "../utils/tryCatchWrapper.js"
import userServices from "../services/User.js"

function getUser(req,res,next){
    TryCatchWrapper(
        userServices.getUserDetails(req,res,next)
    )
}

function updateUser(){
    TryCatchWrapper(
        
    )
}

function deleteUser(){
    console.log("works")
}


const userControllers = {
    getUser,updateUser,deleteUser
}

export default userControllers