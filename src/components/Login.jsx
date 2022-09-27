import React, { useState } from 'react'
import axios from "axios"
import {useNavigate} from "react-router-dom"

const Login = () => {

    const navigate = useNavigate();
    
    const [user,setUser]=useState({ username:"" ,password:""})
    const [auth, setAuth] = useState(true)


    const handleLogin =(e)=>{
        e.preventDefault();
        
        axios.post("http://localhost:8081/users/login",user).then((response)=>{
            if(response.data.status === 200){
                setAuth(true);
                localStorage.setItem("user", JSON.stringify(user));
                window.location.reload(false);
            }
        })
        .catch((err)=>{
            console.log(err)
            alert("incorrect username or password")
        })
    }

    const handleChange=(e)=>{ 
        const value= e.target.value
        console.log(value); 
        setUser({
            ...user, 
            [e.target.name]:value
        })
    }
    return (
    
    <div class="bg-img">
        <form action="POST" class="container">
        <div><h1>Login</h1>
        {auth  === false ? <p>Incorrect username or password</p>: ""}
        
        <label for="username"><b>Username</b></label>
        <input type="text" value={user.username} onChange ={handleChange} placeholder="Enter username" name="username" required/>

        <label for="password"><b>Password</b></label>
        <input type="password" value={user.password} onChange ={handleChange} placeholder="Enter Password" name="password" required/>

        <button onClick={handleLogin} class="btn">Login</button>
        </div>
        </form>
        </div>
  );
}

export default Login