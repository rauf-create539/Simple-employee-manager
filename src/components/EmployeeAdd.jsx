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
        employeeName,
        position, 
        salaryPerMonth
    };

    onAdd(newEmployees);
    
    setEmployeeName("");
    setPosition("");
    setSalaryPerMonth("");

    }



  return (
    <div  className='flex gap-4'>

        <div>
            <input
            value={employeeName}
            type='text'
            onChange={(e) => setEmployeeName(e.target.value)}
            placeholder='Enter New Employee Name '/>
        </div>

        <div>
            <input
            value={position}
            type='text'
            onChange={(e) => setPosition(e.target.value)}
            placeholder='Enter Company Position '/>
        </div>

        <div>
            <input 
            value={salaryPerMonth}
            type='text'
            onChange={(e) => setSalaryPerMonth(e.target.value)}
            placeholder='Enter Salary Per Month'/>
        </div>

        <button onClick={handleAdd}
        className='bg-green-500 p-2 w-[250px]'>
            + Add Employee
        </button>
    </div>
  )
}

export default EmployeeAdd