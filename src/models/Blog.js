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
    email:{
        type: String,
        required: true
    },
    category: {
        type: String,
        enum: ['education', 'lifestyle', 'religion','entertainment','sports','gaming','music','movies','africa','europe','asia','america','food','anime','others'], 
        required: true
    },
    tags:{
        type:Array,
        default:[]
    }
});


const blog = mongoose.model("blog",blogSchema)
export default blog