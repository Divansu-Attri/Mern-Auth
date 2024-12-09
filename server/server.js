require("dotenv").config()
const express = require("express")
const cors = require("cors")
const app = express()   

const authrouter = require("./Router/auth-router")
const contactrouter = require("./Router/contact-router")
const servicerouter = require("./Router/service-router")
const adminRouter = require("./Router/admin-router")

const connectDB = require("./Utils/DB")
const errorMiddleware = require("./Middlewares/error-middleware")

const corsOptions = {
    origin:"http://localhost:5173",
    methods:"GET,PUT,PATCH,DELETE,POST,HEAD",
    credentials:true
}

app.use(cors(corsOptions))
app.use(express.json())

app.use("/api/auth",authrouter)
app.use("/api/form",contactrouter)
app.use("/api/data",servicerouter)

// Admin Route
app.use("/api/admin",adminRouter)

app.use(errorMiddleware)

connectDB().then(()=>{
const PORT = 5000;
app.listen(PORT,()=>{
    console.log(`Server is Running at Port : ${PORT}`)
})
}) 