const {z} = require("zod")

const LoginSchema = z.object({
    
    email: z
    .string({required_error:"Email is Required"})
    .trim()
    .email({meassge:"Invalid Email Address"})
    .min(5,{message:"Email Must be Minimum 5 Character"}).max(200,{message:"Email Must not be 200 Character"}),

    password: z
    .string({required_error:"password is Required"})
    .trim()
    .min(8,{message:"password Must be Minimum 8 Character"}).max(20,{message:"password Must not be 20 Character"})
   
})
const signupSchema = LoginSchema.extend({
    username: z
    .string({required_error:"Name is Required"})
    .trim()
    .min(3,{message:"Name Must be Minimum 3 Character"})
    .max(200,{message:"Name Must not be 200 Character"}),

    phone: z
    .string({required_error:"Phone is Required"})
    .trim()
    .min(10,{message:"Phone Must be Minimum 10 Number"}).max(20,{message:"Phone Must not be 20 Number"}),
   
})

module.exports = {signupSchema,LoginSchema}