import React from 'react'

const EmployeeItem = ({ employee, onDelete, onUpdate }) => {
  return (
            <tr>
                <td className='border p-2 text-center'>{employee.employeeName}</td>
                <td className='border p-2 text-center'>{employee.position}</td>
                <td className='border p-2 text-center'>{employee.salaryPerMonth} </td>                
                <td className='border p-2 flex gap-3 justify-around'>        
                                <button
                                    onClick={onUpdate}
                                    className='bg-green-500 p-2 w-[180px]'>
                                        edit
                                </button>   
                               
                               <button
                                    onClick={onDelete}
                                    className='bg-red-500 p-2 w-[180px]'>
                                        delete
                                </button>                             
                              </td>                           
            </tr>
  )
}

export default EmployeeItem