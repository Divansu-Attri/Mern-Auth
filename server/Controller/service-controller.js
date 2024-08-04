const Service = require("../Models/service-model")

const serviceController = async (req,res) => {
try {
    let response = await Service.find()
    if(!response){
        res.status(404).json({message:"No Service Found"})
    }
    return res.status(200).json({message:response})
} catch (error) {
    console.log(`Service Error ${error}`)
}
}
module.exports = serviceController