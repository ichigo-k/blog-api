import express from "express";
import userControllers from "../controllers/User.js";

const router = express.Router()


router.route("/details/:id").get(userControllers.getUser)
router.route("/update/:id").patch(userControllers.updateUser)
router.route("/delete/:id").delete(userControllers.deleteUser)
router.route("/follow/:id").post(userControllers.follow)


export default router 