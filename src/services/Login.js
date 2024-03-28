import bcrypt from "bcrypt"
import user from "../models/User.js"


export default function authUser(req,res,next){
    const { email, password } = req.body
    user.findOne({email})
        .then((user)=>{
            if(user){
                bcrypt.compare(password, user.password)
                    .then((result)=>{
                        if(result){
                            res.status(200).json({
                                message:"Login successful",
                                user:{
                                    user:{
                                        id:data._id,
                                        name:data.name,
                                        username:data.username,
                                        email:data.email,
                                        followers:data.followers,
                                        following:data.following
                                    }
                                }
                            })
                        }else{
                            res.status(406).json({
                                message:"Incorrect password"
                            })
                        }
                    })
                    .catch((err)=>{
                        res.status(500).json({
                            message:err.message
                        })
                    })
            }else{
                res.status(404).json({
                    message:"User does not exist"
                })
            }
        })
}