import TryCatchWrapper from "../utils/tryCatchWrapper.js"
import addUser from "../services/Register.js"
function register(req,res,next){
  TryCatchWrapper(
      addUser(req,res)
  )

}

function login(req,res,next){
    res.send(req.body)
    next()
}


const AuthControllers ={
    register,login
}

export default AuthControllers
