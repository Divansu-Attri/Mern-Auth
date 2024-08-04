import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Pages/Home';
import About from './Pages/About';
import Services from './Pages/Services';
import Contact from './Pages/Contact';
import Login from './Pages/Login';
import Registration from './Pages/Registration';
import Navbar from './Component/Navbar';
import Error from './Pages/Error';
import Logout from './Pages/Logout';
import AdminLayout from './AdminPages/AdminLayout';
import AdminUsers from './AdminPages/AdminUsers';
import AdminContact from './AdminPages/AdminContact';
import AdminUpdate from './AdminPages/AdminUpdate';

export default function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/services' element={<Services/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Registration/>} />
        <Route path='/logout' element={<Logout/>} />
        <Route path='*' element={<Error/>} />

        {/* AdminRoutes */}

        <Route path='/admin' element={<AdminLayout/>}>

        <Route path='users' element={<AdminUsers/>}/>
        <Route path='users/:id/edit' element={<AdminUpdate/>}/>

        <Route path='contacts' element={<AdminContact/>}/>
        
        </Route>

      </Routes>
      </BrowserRouter>
    </>
  );
}
