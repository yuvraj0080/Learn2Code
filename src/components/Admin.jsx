import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { fetchAdmin, fetchUser } from './utils/fetchUser'

const Admin = () => {
    const user = fetchUser();
    const adminCred = fetchAdmin();
    const [allUsers, setAllUsers]= useState([]);

    useEffect(()=>{
        if( user?.username === adminCred?.username && user?.password === adminCred?.password){
            axios.get("http://localhost:8083/api/v1/employees").then((response)=>{
                setAllUsers(response.data)
            }).catch((err)=>{
                console.log(err)
            })
        }
    },[])

    const handleDelete =(e)=>{
        axios.delete(`http://localhost:8083/api/v1/employees/${e.currentTarget.id}`).then(
            window.parent.location = window.parent.location.href
        )
        
    }

    if( user?.username === adminCred?.username && user?.password === adminCred?.password){
        console.log(user,  adminCred)
        return (
            <div>
                <h2 className="text-center">Users List</h2>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>User Name</th>
                                <th>Passowrd</th>
                                <th>Email Id</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                            <tbody>
                               {
                                        allUsers.map(
                                            employee =>
                                            <tr key = {employee.id}>
                                                <td>{employee.username}</td>
                                                <td>{employee.password}</td>
                                                <td>{employee.email}</td>
                                                <button style={{marginLeft: "10px"}} onClick={handleDelete} id={employee.id}  className="btn btn-danger">Delete </button>
                                                
                                            </tr>
                                        )
                                }
                            </tbody>
                    </table>
                </div>
            </div>
          )
    }else{
        console.log("else",user,  adminCred)
        return(
            <div>
                not for you
            </div>
        )
    }
  
}

export default Admin