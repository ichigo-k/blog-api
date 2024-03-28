import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
    },
    content: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    likes:{
       type:Array,
       default:[]
    },
    email:{
        type: String,
        required: true
    },
    category: {
        type: String,
        enum: ['education', 'lifestyle', 'religion','entertainment','sports','gaming','music','movies','africa','europe','asia','america','food','anime','others'], 
        required: true,
        message: '{VALUE} is not supported'
    },
    tags:{
        type:Array,
        default:[]
    },
    views:{
        type: Array,
        default:[]
    }
});


const blog = mongoose.model("blog",blogSchema)
export default blog