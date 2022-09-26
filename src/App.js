
import './App.css';
import Layout from './components/Layout';
import {Routes, Route} from "react-router-dom"
import Home from './components/Home';
import Courses from './components/Courses';
import UserInfo from './components/UserInfo';
import CourseDetails from './components/CourseDetails';
import Login from './components/Login';
import Register from './components/Register';

function App() {
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
        </Routes>
      </div>
      
    </div>
  );
}

export default App;
