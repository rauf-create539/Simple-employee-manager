import React from 'react'

const EmployeeItem = ({ employee, onDelete }) => {
  return (
    <div>

            <tr className='p-2 bg-gray-400 w-[400px]'>
                <th>Employee name</th>
                <th>Position</th>                
                <th>Salary per month</th>
                <th>Action</th>
            </tr>

            <tr>
                <td>{employee.employeeName}</td>
                <td>{employee.position}</td>
                <td>{employee.salaryPerMonth} </td>                
                <td>         <button
                                    onClick={onDelete}
                                    className='bg-red-500 p-2 w-[250px]'>
                                        delete
                                </button></td>
            </tr>
    </div>
  )
}

export default EmployeeItem