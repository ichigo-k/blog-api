import blog from "../models/Blog.js"


async function getAll(req,res){
    const blogs = await blog.find()
    .then(()=>{
        res.json(blogs)
    })
    .catch((err)=>{
        res.json(err)
    })
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



const blogServices ={
    getAll,newBlog
}


export default blogServices