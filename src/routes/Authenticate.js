import express from "express"
import AuthControllers from "../controllers/Authenticate.js"

const router = express.Router()

router.route("/register").post(AuthControllers.register)

export default router