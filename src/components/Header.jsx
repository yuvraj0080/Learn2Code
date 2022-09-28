import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {FaUserAlt} from "react-icons/fa"
import { fetchUser } from './utils/fetchUser'
import {useNavigate} from "react-router-dom"



const Header = () => {
    const [user, setUser] = useState("")

    useEffect(()=>{
        const userInfo = fetchUser();
        console.log(userInfo)
        if(userInfo){
            setUser(userInfo)
        }
    },[])

const navigate = useNavigate();

    function refreshPage(){      
        localStorage.clear();
        window.parent.location = window.parent.location.href; 
        navigate("/register", {replace:true})
    }

  return (
    <div className='Header'>
        <div className='container1'>
            <h1>LEARN<span>2</span>CODE</h1>
            <Link to={"/"} className="navItem">
                <button class="navItem1">Home</button>
            </Link>
            <Link to={"courses"} className="navItem">
                <button class="navItem1">Courses</button>
            </Link>
            <Link to={"admin"} className="navItem">
                <button class="navItem1">Admin</button>
            </Link>
        </div>
    
        <div className='container2'>
        {!user ? <Link to={"register"} className="navItem">
                <button class="navItem2">Register</button></Link> : <button class="navItem2" onClick={() => refreshPage()}> Logout </button> }
        {!user ? <Link to={"login"} className="navItem">
                <button class="navItem2">Login</button></Link> : <p>Hello, {user.username}</p>}
            <Link to={"user-info"} className="navItem">
                <FaUserAlt />
            </Link>  
        </div>    
        
    </div>
  )
}

export default Header