import bcrypt from "bcrypt"
import user from "../models/User.js"
async function addUser(req, res,next) {
     const { name, username, email, password } = req.body

     const hashedPassword = await bcrypt.hash(password,10)

     await user.create({
        name,
        username,
        email,
        password: hashedPassword,
        followers: [], 
        following: [] 
    })
     .then(()=>{
        res.status(201).json({
            message:"Successfuly added" +" "+ name,
            user:{
                id:user._id,
                name,
                username,
                email,
                followers:[],
                following:[],
            }
        })
     })
     .catch((err)=>{
        res.status(500).json({
            message:err.message
        })
     })
   
     next()
}



export default addUser
