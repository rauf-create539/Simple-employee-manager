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

    const updateEmployees = (index) => {
        const name = prompt("Edit name: ", employees[index].employeeName);
        const position = prompt("Edit position: ", employees[index].position);
        const salary = prompt("Edit salary: ", employees[index].salaryPerMonth);

        if(name && position && salary) {
            const updateList = employees.map((employee, i) => 
                i === index ? {...employee, employeeName: name, position: position, salaryPerMonth: salary}
                : employee
            );
            setEmployees(updateList);
        } else {
            alert("All fields must be filled out!   ")
        }
    };

  return (
    <div className='w-full flex flex-col justify-center items-center'>
        <div className='w-full bg-green-500 text-center p-4'>
            <h1>Employee List</h1>


            <div className='mt-5 flex justify-center'>
                <EmployeeAdd onAdd={addEmployees} />
            </div>            
        </div>

        <div className='mt-15 flex justify-center'>
                {employees.length === 0 ? (
                    <p className='text-gray-400 text-center'>No employees yet</p>
                ) : (
                <table className='border-collapse border border-gray-400 mt-4'>
                    <thead>
                        <tr>
                            <th className='bg-gray-400 p-2 w-[350px]'>Employee name</th>
                            <th className='bg-gray-400 p-2 w-[350px]'>Position</th>                
                            <th className='bg-gray-400 p-2 w-[350px]'>Salary per month</th>
                            <th className='bg-gray-400 p-2 w-[350px]'>Action</th>
                        </tr> 
                    </thead>

                    <tbody className='mt-10'>
                        {employees.map((employee, index) => (
                            <EmployeeItem key={index} employee={employee} onDelete={() => deleteEmployees(index)} 
                            onUpdate={() => updateEmployees(index)}
                             />
                        ))}
                    </tbody>
                </table>
                  
                )}
        </div>
        
    </div>
  )
}

export default EmployeeList