const mongoose = require("mongoose")

const URI = process.env.MONGO_URI

const connectDB = async () => {
    try {
        await mongoose.connect(URI) 
        console.log(`Connection Successfull to DB`)
    } catch (error) {
        console.log(error)
        console.log("Database Connection Failed")
        process.exit(0)
    }
}

module.exports = connectDB