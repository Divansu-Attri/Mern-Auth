const express = require("express")
const router = express.Router()
const serviceController = require("../Controller/service-controller")

router.route("/services").get(serviceController)

module.exports = router