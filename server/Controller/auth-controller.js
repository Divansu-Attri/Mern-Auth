const User = require("../Models/user-model")
// const bcrypt = require("bcrypt")

const Home = async (req,res) => {
try {
    res
    .status(200)
    .send("Hello World by Router")

} catch (error) {
    console.log(error)
}
}

const Register = async (req,res) => {
    try {
        console.log(req.body)
        const {username,email,phone,password} = req.body
        const userExist = await User.findOne({email})
        if(userExist){
            return res.status(400).json({message:"Email already Exists"})
        }
        // const SaltRound = 10;
        // const hash_password = await bcrypt.hash(password,SaltRound)
        const UserCreated = await User.create({username,email,phone,password})
        res.status(200).json({ 
            message: "Registration Sucessfull",
            token: await UserCreated.generateToken(),
            userId:UserCreated._id.toString()
        })

    } catch (error) {   
        res
        .status(500)
        .json("Internal Server Error")
    }
}
 
const Login = async (req,res) => {
    const {email,password} = req.body;
    const userExist = await User.findOne({email})
    if(!userExist){
        res.status(400).json({message: "Invalid Credential"})
    } 
    // const user = await bcrypt.compare(password,userExist.password)
    const user = await userExist.comparePassword(password)
    if(user){
        res.status(200).json({ 
            message: "LogIn Sucessfull",
            token: await userExist.generateToken(),
            userId:userExist._id.toString()
        })  
    }
    else{
        res.status(400).json({message: "Invalid Email or Password"})
    }

}

const user = async (req, res) => {
    try {
      // const userData = await User.find({});
      const userData = req.user;
      console.log(userData);
      return res.status(200).json({userData });
    } catch (error) {
      console.log(` error from user route ${error}`);
    }
  };


module.exports = {Home,Register,Login,user}

