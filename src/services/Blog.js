import blog from "../models/Blog.js"
import user from "../models/User.js"


async function getAll(req,res){
    const blogs = await blog.find()
    .then(()=>{
        res.json(blogs)
    })
    .catch((err)=>{
        res.json(err)
    })
}


async function getUserBlog(req, res) {
    try {
        const {id} = req.params

        const User = await user.findById(id);
        if (!User) return res.status(404).json({ message: "User not found" });

        const blogs = await blog.find({ email: User.email });
        if (blogs.length === 0) {
            return res.status(404).json({ message: "No blogs found" });
        } else {
            return res.status(200).json(blogs);
        }
    } catch (err) {
        return res.status(500).json(err);
    }
}



async function newBlog(req,res){
    const{title , content, tags, category, email} = req.body

    await blog.create({
        title, content, tags, category, email
    })
    .then(()=>{
        res.status(201).json({
            message:"Blog created successfully"
        })
    })
    .catch((err)=>{
        res.status(500).json(err)
    })
}


async function deleteBlog(req,res){
    const {id} = req.params

   await blog.findByIdAndDelete(id)
    .then(() => {
        res.status(200).json({
            message:"Blog deleted successfully"
        })
    })
    .catch((err)=> {
        res.status(500).json(err)
    })
}

async function getSingleBlog(req, res) {
    try {
        const { id } = req.params;

        const Blog = await blog.findById(id);
        if (!Blog) {
            return res.status(404).json({ message: "Blog not found" });
        } else {
            return res.status(200).json(Blog);
        }
    } catch (err) {
        return res.status(500).json(err);
    }
}


const blogServices ={
    getAll,newBlog,getUserBlog,deleteBlog,getSingleBlog
}


export default blogServices