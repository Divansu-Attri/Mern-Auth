import { useEffect, useState } from "react"
import {useAuth} from '../Store/auth'
import {useParams,useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify'


export default function AdminUpdate() {
  const navigate = useNavigate()
    const params = useParams()
    const {AuthorizationToken} = useAuth()

    const [data,setData] = useState({
        username:"",
        email:"",
        phone:""
      })

      const getSingleUserData = async () => {

        try {
            let response = await fetch(`http://localhost:5000/api/admin/users/${params.id}`,{
              method:"GET",
              headers:{
                Authorization:AuthorizationToken
              }
            })
            const data = await response.json()
            setData(data)
      
          } catch (error) {
            console.log(error)
          }

      }

      useEffect(()=>{
        getSingleUserData()
      },[])

      const handleInput = (e) =>{
        const name = e.target.name;
        let value = e.target.value;
        setData({
          ...data,
          [name]:value
        })
      }

      const handleSubmit = async (e) => {
        e.preventDefault()
        try {
          let response = await fetch(`http://localhost:5000/api/admin/users/update/${params.id}`,{
            method:"PATCH",
            headers:{
              "Content-Type":"application/json",
              Authorization:AuthorizationToken
            },
            body:JSON.stringify(data)
          })         
          if(response.ok){
            toast.success("Updated Successfully")
            navigate("/admin/users")
          }  
          else{
            toast.error("Not Updated")
          }
    
        } catch (error) {
          console.log(error)
        }
      }


  return (
    <>
     <form className="container mt-5" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="username" className="form-label">Username</label>
        <input type="text" className="form-control" name="username" placeholder="Username" id="username" value={ data.username} onChange={handleInput} autoComplete="off" required />
      </div>

      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email</label>
        <input type="email" className="form-control" name="email" placeholder="Email" id="email" autoComplete="off" value={ data.email} onChange={handleInput}  required />
      </div>

      <div className="mb-3">
        <label htmlFor="phone" className="form-label">Phone</label>
        <input type="phone" className="form-control" name="phone" placeholder="phone" id="phone" autoComplete="off" value={ data.phone} onChange={handleInput}  required />

      </div>


      <button type="submit" className="btn btn-success w-100">Update</button>
    </form>


    
    </>
  )
}
