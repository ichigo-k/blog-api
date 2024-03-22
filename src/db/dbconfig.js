import mongoose from "mongoose";


export default function connectDB(url){
    mongoose.connect(url)
}