import TryCatchWrapper from "../utils/tryCatchWrapper.js"
import addUser from "../services/Register.js"
import authUser from "../services/Login.js"


function register(req,res,next){
  TryCatchWrapper(
      addUser(req,res,next)
  )
}

function login(req,res,next){
    TryCatchWrapper(
        authUser(req,res,next)
    )
}


const AuthControllers ={
    register,login
}

export default AuthControllers
