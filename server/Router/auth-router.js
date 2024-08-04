const express = require("express")
const router = express.Router()
const authController = require("../Controller/auth-controller")
const validate = require("../Middlewares/validate-middleware")
const {signupSchema,LoginSchema} = require("../Validator/auth-validator")
const authMiddleware = require("../Middlewares/authMiddleware")


router.route("/").get(authController.Home)
router.route("/register").post(validate(signupSchema),authController.Register)
router.route("/login").post(validate(LoginSchema), authController.Login)
router.route("/user").get(authMiddleware, authController.user)

 
module.exports = router   