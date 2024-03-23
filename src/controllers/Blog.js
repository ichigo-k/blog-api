import TryCatchWrapper from "../utils/tryCatchWrapper.js";
import blogServices from "../services/Blog.js";

function getAllBlogs(req,res){
    TryCatchWrapper(
       blogServices.getAll(req,res)
    )
}


function getUserBlog(req,res){
    TryCatchWrapper(
        blogServices.getUserBlog(req,res)
    )

}

function addBlog(req,res,){
    TryCatchWrapper(
        blogServices.newBlog(req,res)
    )
}


function getSingleBlog(req,res){
    TryCatchWrapper(
        blogServices.getSingleBlog(req,res)
    )
}


function deleteBlog(req,res){
    TryCatchWrapper(
        blogServices.deleteBlog(req,res)
    
    )
}

const blogControllers ={
    getAllBlogs,addBlog,getUserBlog,deleteBlog,getSingleBlog
}

export default blogControllers