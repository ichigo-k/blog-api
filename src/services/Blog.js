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



const blogServices ={
    getAll
}


export default blogServices