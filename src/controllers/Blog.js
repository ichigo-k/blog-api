import TryCatchWrapper from "../utils/tryCatchWrapper.js";
import blogServices from "../services/Blog.js";

function getAllBlogs(req,res){
    TryCatchWrapper(
       blogServices.getAll(req,res)
    )
}

function addBlog(req,res,){
    TryCatchWrapper(
        blogServices.newBlog(req,res)
    )
}


const blogControllers ={
    getAllBlogs,addBlog
}

export default blogControllers