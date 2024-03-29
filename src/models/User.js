import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: /^\S+@\S+\.\S+$/
    },
    password: {
        type: String,
        required: true,
        min: [6, 'Must be at least 6 characters'],
    },
    followers:{
        type: Array,
    default: []
    },
    following:{
        type: Array,
    default: []
    },
    date: {
        type: Date,
        default: Date.now
    },
    profilePic:{
        type:String,
    }
});
   

const user = mongoose.model("user", userSchema);
export default user;