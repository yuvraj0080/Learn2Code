
import './App.css';
import Layout from './components/Layout';
import {Routes, Route} from "react-router-dom"
import Home from './components/Home';
import Courses from './components/Courses';
import UserInfo from './components/UserInfo';
import CourseDetails from './components/CourseDetails';

function App() {
  return (
    <div className="App">
      <Layout/>
      <div>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="courses" element={<Courses />} />
          <Route path="user-info" element={<UserInfo/>}/>
          <Route path="course-detail/:id" element={<CourseDetails />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
