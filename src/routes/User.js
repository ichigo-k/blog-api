import express from "express";

const router = express.Router()


router.route("/").get(()=>console.log("heloo"))


export default router 