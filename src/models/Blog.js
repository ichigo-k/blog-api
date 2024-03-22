import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    author:{ 
        type : mongoose.Types.ObjectId,
        ref: 'user',
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    likes:{
        type: Number,
        default: 0
    },
    foreignKey:{
        type: String,
        required: true
    }
});


const blog = mongoose.model("blog",blogSchema)
export default blog