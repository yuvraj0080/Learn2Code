import axios from 'axios';

const Employee_API_BASE_URL="http://localhost:8083/api/v1/employees";

class Employeeservice{
getEmployees()
{
    return axios.get(Employee_API_BASE_URL);
}

deleteEmployee(employeeId){

    return axios.delete(Employee_API_BASE_URL + '/' + employeeId);

}

createEmployee(employee)

{
    return axios.post(Employee_API_BASE_URL,employee);  //this will make rest api call
}

}
export default new Employeeservice()  