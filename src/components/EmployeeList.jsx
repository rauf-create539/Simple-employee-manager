import React, { useState } from 'react';
import EmployeeAdd from './EmployeeAdd';

const EmployeeList = () => {

    const [employees, setEmployees] = useState([]);
    
    const addEmployees = (newEmployees) => {
        setEmployees([...employees, newEmployees]);
    };

    const deleteEmployees = (index) => {
        setEmployees(employees.filter((_, i)=> i !== index ));
    };

  return (
    <div>
        <div>
            <h1>Employee List</h1>
        </div>
        <EmployeeAdd onAdd={addEmployees} />

        <div>

        </div>
    </div>
  )
}

export default EmployeeList