const express = require("express")
const router = express.Router()
const contactController = require("../Controller/contact-controler")


router.route("/contact").post(contactController)

module.exports = router