import React ,{useState}from 'react'
import axios from"axios"

const Register = () => {
  
    const [user,setUser]=useState({ username:"" ,password:"",email:""})

    const handleRegister=()=>{
        axios.post("http://localhost:8081/users",user).then((response)=>{
            console.log(response);
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
        <h1>Register</h1>

        <label for="username"><b>Username</b></label>
        <input type="text" value={user.username} onChange ={handleChange} placeholder="Enter username" name="username" required/>

        <label for="email"><b>Email</b></label>
        <input type="email" value={user.email} onChange ={handleChange} placeholder="Enter email" name="email" required/>

        <label for="password"><b>Password</b></label>
        <input type="password" value={user.password} onChange ={handleChange} placeholder="Enter Password" name="password" required/>

        <button onClick={handleRegister} class="btn">Register</button>
        </form>
        </div>
  )
}

export default Register