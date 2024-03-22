import user from "../models/User.js"

function register(req,res,next){
    res.send(req.body)
    next()
}

function login(req,res,next){
    res.send(req.body)
    next()
}


const AuthControllers ={
    register,login
}

export default AuthControllers
