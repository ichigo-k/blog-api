import express from "express";
import blogControllers from "../controllers/Blog.js";

const router = express.Router()

router.route("/all").get(blogControllers.getAllBlogs)
router.route("/:id/user").get(blogControllers.getUserBlog)
router.route("/:id").get(blogControllers.getSingleBlog)
router.route("/create").post(blogControllers.addBlog)
router.route("/delete/:id").delete(blogControllers.deleteBlog)



export default router