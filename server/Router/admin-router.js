const express = require("express")
const adminController = require("../Controller/admin-controller")
const authMiddleware = require("../Middlewares/authMiddleware")
const adminMiddleware = require("../Middlewares/admin-Middlware")
const router = express.Router()

router.route("/users").get(authMiddleware,adminMiddleware,adminController.getAllUsers)

router.route("/users/delete/:id").delete(authMiddleware,adminMiddleware,adminController.deleteUserById)
router.route("/users/:id").get(authMiddleware,adminMiddleware,adminController.getUserById)
router.route("/users/update/:id").patch(authMiddleware,adminMiddleware,adminController.UpdateUserById)


router.route("/contacts").get(authMiddleware,adminController.getAllContact)
router.route("/contacts/delete/:id").delete(authMiddleware,adminMiddleware,adminController.deleteContactById)



module.exports = router