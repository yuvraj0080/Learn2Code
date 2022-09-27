import React, { Component } from 'react';
import Employeeservice from '../services/Employeeservice';
class Listemployee extends Component {
    constructor(props) {
        super(props);
        this.state ={
            employees :[]
        }
    }

    deleteEmployee(id){

        Employeeservice.deleteEmployee(id).then( res => {

            this.setState({employees: this.state.employees.filter(employee => employee.id !== id)});

        });

    }

    componentDidMount()
        {
    Employeeservice.getEmployees().then((res) => {
        this.setState({employees: res.data});
    })}
    
    render() {
        return (
            <div>
                <h2 className="text-center">Users List</h2>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>User Name</th>
                                <th>Passowrd</th>
                                <th>Employee Email Id</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                            <tbody>
                               {
                                        this.state.employees.map(
                                            employee =>
                                            <tr key = {employee.id}>
                                                <td>{employee.username}</td>
                                                <td>{employee.password}</td>
                                                <td>{employee.email}</td>
                                                <button style={{marginLeft: "10px"}} onClick={ () => this.deleteEmployee(employee.id)} className="btn btn-danger">Delete </button>
                                                
                                            </tr>
                                        )
                                }
                            </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default Listemployee;