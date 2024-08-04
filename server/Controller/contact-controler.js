const Contact = require("../Models/contact-model")

const contactController = async (req,res) => {
    try {

       await Contact.create(req.body)
       res.status(200).json({message: "Message Send Sucessfully"})

    } catch (error) {
        console.log(error)
       res.status(400).json({message:"Message Not Delivered"})
    }
    }
    module.exports = contactController