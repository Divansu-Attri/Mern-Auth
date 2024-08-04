import { useState } from "react"
import {useAuth} from '../Store/auth'
import {toast} from 'react-toastify'

export default function Contact() {

  const {user} = useAuth()

  const [contact,setContact] = useState({
    username:"",
    email:"",
    message:""
  })
  const [userData,setUserData] = useState(true)
  if(userData&&user){
    setContact({
    username:user.username,
    email:user.email,
    message:"",

    })
    setUserData(false)
  }

  const handleInput = (e) =>{
    let name = e.target.name
    let value = e.target.value
    setContact({
      ...contact,
      [name]:value 
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      let respose = await fetch("http://localhost:5000/api/form/contact",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify(contact)
      })
      let data = await respose.json()
      if(respose.ok){

        toast.success(data.message)
        setContact({
          username:user.username,
          email:user.email,
          message:"",
        })
      }
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
        <input type="text" className="form-control" name="username" placeholder="Username" id="username" value={ contact.username} onChange={handleInput} autoComplete="off" required />
      </div>

      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email</label>
        <input type="email" className="form-control" name="email" placeholder="Email" id="email" autoComplete="off" value={ contact.email} onChange={handleInput}  required />
      </div>

      <div className="mb-3">
        <label htmlFor="phone" className="form-label">Message</label>
        <textarea name="message" className="form-control" id="message" cols={30} rows={10} value={ contact.message} onChange={handleInput}  autoComplete="off" required/>
      </div>


      <button type="submit" className="btn btn-primary w-100">Send</button>
    </form>


    </>
  )
}
