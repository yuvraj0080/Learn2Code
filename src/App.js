
import './App.css';
import Layout from './components/Layout';
import {Routes, Route} from "react-router-dom"
import Home from './components/Home';
import Courses from './components/Courses';
import UserInfo from './components/UserInfo';
import CourseDetails from './components/CourseDetails';
import Login from './components/Login';
import Register from './components/Register';
import Aboutus from './components/Aboutus';
import Contactus from './components/Contactus';
import { useEffect } from 'react';
import Admin from './components/Admin';

function App() {

  const adminUser = {username:"admin", password:"admin"}
  useEffect(()=>{
    localStorage.setItem("admin", JSON.stringify(adminUser))
  },[])

  return (
    <div className="App">
      <Layout/>
      <div>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="courses" element={<Courses />} />
          <Route path="login" element={<Login/>}/>
          <Route path="user-info" element={<UserInfo/>}/>
          <Route path="courses/course-detail/:id" element={<CourseDetails />} />
          <Route path="register" element={<Register />} />
          <Route path="about" element={<Aboutus/>}/>
          <Route path="contact" element={<Contactus/>}/>
          <Route path="admin" element={<Admin/>}/>
        </Routes>
      </div>
      
    </div>
  );
}

export default App;
