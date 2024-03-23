import TryCatchWrapper from "../utils/tryCatchWrapper.js";
import blogServices from "../services/Blog.js";

function getAllBlogs(req,res){
    TryCatchWrapper(
       blogServices.getAll(req,res)
    )
}


const blogControllers ={
    getAllBlogs
}

export default blogControllers