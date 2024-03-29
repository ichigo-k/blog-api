import express from "express";
import userControllers from "../controllers/User.js";
import upload from "../middleware/upload.js";

const router = express.Router()


router.route("/details/:id").get(userControllers.getUser)
router.route("/update/:id").patch(upload.single("profilePic"),userControllers.updateUser)
router.route("/delete/:id").delete(userControllers.deleteUser)
router.route("/follow/:id").post(userControllers.follow)
router.route("/profiepic/:name").get(userControllers.getProfilepic)


export default router 