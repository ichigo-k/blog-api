import express from "express"
import AuthControllers from "../controllers/Authenticate.js"

const router = express.Router()

router.route("/register").post(AuthControllers.register)
router.route("/login").post(AuthControllers.login)

export default router