import React from 'react'
import { Link } from 'react-router-dom'
import {FaUserAlt} from "react-icons/fa"
const Header = () => {
  return (
    <div className='Header'>
        <div className='container1'>
            <h1 className="navItem">LEARN</h1>
            <Link to={"/"} className="navItem">
                <h2>Home</h2>
            </Link>
            <Link to={"courses"} className="navItem">
                <h2>Courses</h2>
            </Link>
        </div>
        <div className='container2'>
            <Link to={"user-info"} className="navItem">
                <FaUserAlt />
            </Link>  
        </div>    
        
    </div>
  )
}

export default Header