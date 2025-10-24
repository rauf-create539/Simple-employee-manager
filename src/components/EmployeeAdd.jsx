import React, { useState } from 'react'

const EmployeeAdd = ({ onAdd }) => {

    const [employeeName, setEmployeeName] = useState("");
    const [position, setPosition] = useState("");
    const [salaryPerMonth, setSalaryPerMonth] = useState("");

    const handleAdd = () => {
        if(!employeeName.trim() || !position.trim() || !salaryPerMonth.trim()){
            alert("All fields must be filled with inputs!");
            return;
        }

        const newEmployees = {
        id: Date.now(),
        name: employeeName,
        position, 
        salaryPerMonth
    };

    onAdd(newEmployees);
    
    setEmployeeName("");
    setPosition("");
    setSalaryPerMonth("");

    }



  return (
    <div>

        <div>
            <input
            type='text'
            placeholder='Enter New Employee Name '/>
        </div>

        <div>
            <input
            type='text'
            placeholder='Enter Company Position '/>
        </div>

        <div>
            <input 
            type='text'
            placeholder='Enter Salary Per Month'/>
        </div>
    </div>
  )
}

export default EmployeeAdd