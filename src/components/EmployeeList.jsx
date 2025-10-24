import React, { useState } from 'react';
import EmployeeAdd from './EmployeeAdd';
import EmployeeItem from './EmployeeItem';

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
            <table>
                {employees.length === 0 ? (
                    <p className='text-gray-400 text-center'>No employees yet</p>
                ) : (
                    employees.map((employee, index) => (
                        <EmployeeItem key={index} employee={employee} onDelete={() => deleteTask(index)} />
                    ))
                )}
            </table>
        </div>
        
    </div>
  )
}

export default EmployeeList