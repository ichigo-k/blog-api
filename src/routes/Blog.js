import express from "express";
import blogControllers from "../controllers/Blog.js";

const router = express.Router()

router.route("/all").get(blogControllers.getAllBlogs)


export default router