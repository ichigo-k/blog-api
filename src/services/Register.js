import bcrypt from "bcrypt"
import user from "../models/User.js"
async function addUser(req, res) {
     const { fname, sname, email, password } = req.body

     const hashedPassword = await bcrypt.hash(password,10)

     await user.create({
        fname,
        sname,
        email,
        password:hashedPassword
     })
     .then(()=>{
        res.json({
            message:"Successfuly added" + " " + fname + " " + sname,
            user:{
                fname,
                sname,
                email
            }
        })
     })
     .catch((err)=>{
        res.json({
            message:err.message
        })
     })
   
}



export default addUser
