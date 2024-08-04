const adminMiddleware = (req,res,next) => {
try {
    const adminRole = req.user.isAdmin;
    if(!adminRole){
        return res.status(403).json({message:"Access Denied!! User is Not Admin"})
    }
    // console.log(req.user)
    // return res.status(200).json({messaeg:req.user})
    next()
} catch (error) {
    next(error) 
}
}
module.exports = adminMiddleware