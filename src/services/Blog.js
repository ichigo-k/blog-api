import blog from "../models/Blog.js"
import user from "../models/User.js"


async function getAll(req, res) {
    try {
        const blogs = await blog.find();
        return res.json(blogs);
    } catch (err) {
        return res.status(500).json(err);
    }
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


async function likeBlog(req, res) {
    const { blogId } = req.params;
    const {id} = req.body

    try {
        const Blog = await blog.findById(blogId);

        if (!Blog) {
            return res.status(404).json({ message: "Blog not found" });
        }

        // Check if the user has already liked the blog
        const hasLiked = Blog.likes.includes(id);

        if (hasLiked) {
            // Remove the like
            await blog.findByIdAndUpdate(blogId, { $pull: { likes:id } });
            return res.status(200).json({ message: "Like removed successfully" });
        } else {
            // Add the like
            await blog.findByIdAndUpdate(blogId, { $push: { likes: id } });
            return res.status(200).json({ message: "Blog liked successfully" });
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
}

function getByCat(req,res){
    const {category} = req.params

    blog.find({category:category})
    .then((blogs)=>{
        if(blogs.length === 0){
            return res.status(404).json({message:"No blogs found"})
        }
        return res.status(200).json(blogs)
    })
    .catch((err)=>{
        return res.status(500).json(err)
    })
}



const blogServices ={
    getAll,newBlog,getUserBlog,deleteBlog,getSingleBlog,likeBlog,getByCat
}


export default blogServices