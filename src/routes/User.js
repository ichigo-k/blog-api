import express from "express";
import userControllers from "../controllers/User.js";

const router = express.Router()


router.route("/details/:id").get(userControllers.getUser)
router.route("/update").patch(userControllers.updateUser)
router.route("/delete").delete(userControllers.deleteUser)


export default router 