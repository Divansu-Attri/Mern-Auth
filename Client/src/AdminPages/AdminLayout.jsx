import { Navigate, Outlet } from 'react-router-dom';
import {Link} from 'react-router-dom'
import {useAuth} from '../Store/auth'

export default function AdminLayout() {

  const {user,isLoading} = useAuth()

  if(isLoading){
    return <h1>Loading...</h1>
  }
  if(!user.isAdmin){
    return <Navigate to="/"/>
  }

  return (
    <>
    <header>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-dark bg-success rounded container-fluid">
        <Link className="navbar-brand text-dark p-2" to="#">
           Admin Pannel
       </Link>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item ">
                <Link className="nav-link text-dark" to="/admin/users">
                  Users
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/admin/contacts">
                  Contacts
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark" to="/services">
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
     <Outlet/>
    </>
  )
}
