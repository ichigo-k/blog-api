import mongoose from "mongoose";

const userSchema = new mongoose.Schema("user",{
    Fname: {
        type: String,
        required: true
    },
    Sname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        min: [6, 'Must be at least 6 characters'],
    }
})

const user = mongoose.model("user", userSchema);
export default user;