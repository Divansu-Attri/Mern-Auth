import { useState } from "react"
import {useNavigate} from 'react-router-dom'
import {useAuth} from '../Store/auth'
import {toast} from 'react-toastify'


export default function Registration() {

  const navigate = useNavigate()
  const {storeTokenInLS} = useAuth()

  const [user,setUser] = useState({ 
    username:"",
    email:"",
    phone:"",
    password:"",
  })

  const handleInput = (e) =>{
    let name = e.target.name
    let value = e.target.value
    setUser({
      ...user,
      [name]:value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      let respose = await fetch("http://localhost:5000/api/auth/register",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify(user)
      })

      let res_server = await respose.json() 
        console.log(res_server)

      if(respose.ok){
        // localStorage.setItem('token',res_server.token)
        storeTokenInLS(res_server.token)
        toast.success(res_server.message)
        setUser({username:"",email:"",phone:"",password:"",})
        navigate("/")
      }
      else
      toast.error(res_server.extraDetails?res_server.extraDetails:res_server.message)
      console.log(res_server)
      
    } catch (error) { 
      toast.error("Invalid Credentials")
      console.log(error)
    }
  }

  return (
    <>
    <form className="container mt-5" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="username" className="form-label">Username</label>
        <input type="text" className="form-control" name="username" placeholder="Username" id="username" value={user.username} onChange={handleInput} autoComplete="off" required />
      </div>

      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email</label>
        <input type="email" className="form-control" name="email" placeholder="Email" id="email" autoComplete="off" value={user.email} onChange={handleInput}  required />
      </div>

      <div className="mb-3">
        <label htmlFor="phone" className="form-label">Phone</label>
        <input type="number" className="form-control" name="phone" placeholder="Phone" id="phone" autoComplete="off" value={user.phone} onChange={handleInput} required />
      </div>

      <div className="mb-3">
        <label htmlFor="password" className="form-label">Password</label>
        <input type="password" className="form-control" name="password" placeholder="Password" id="password" autoComplete="off" value={user.password} onChange={handleInput} required />
      </div>

      <button type="submit" className="btn btn-primary w-100">Register</button>
    </form>
    </>
  )
}




