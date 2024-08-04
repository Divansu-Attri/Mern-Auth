const User = require("../Models/user-model")
const Contact = require("../Models/contact-model")

const getAllUsers = async (req,res) => {
    try {
        const user = await User.find({},{password:0})
        if(!user || user.length === 0){
            return res.status(404).json({message:"No User Found"})
        }
        return res.status(200).json(user)
    } catch (error) {
        next(error)
    }
}

const getUserById = async (req,res) => {
    try {
        const id = req.params.id;
        const singleUserData = await User.findOne({_id:id},{password:0})
        return res.status(200).json(singleUserData)
    } catch (error) {
        console.log(error)
    }

}
 
const UpdateUserById = async (req,res) => {
    try {
        const id = req.params.id
        const UpdateUserData = req.body
        
        const updatedData = await User.updateOne({_id:id},{$set:UpdateUserData})

        return res.status(200).json(updatedData)

    } catch (error) {
        console.log(error)
    }
}


const deleteUserById = async (req,res) => {
try {
    const id = req.params.id;
    await User.deleteOne({_id:id})
    return res.status(200).json({message:"User Deleted Successfully"})
} catch (error) { 
    console.log(error)
}
}


const getAllContact = async (req,res) => {
    try {
        const contact = await Contact.find()
        if(!contact || contact.length === 0){
            return res.status(404).json({message:"No Contact Found"})
        }
        return res.status(200).json(contact)
    } catch (error) {
        next(error)
    }
}

const deleteContactById = async (req,res) => {
    try {
        const id = req.params.id;
        await Contact.deleteOne({_id:id})
        return res.status(200).json({message:"Contact Deleted Successfully"})
    } catch (error) { 
        console.log(error)
    }
}


module.exports = {getAllUsers,getAllContact,deleteUserById,deleteContactById,getUserById,UpdateUserById}