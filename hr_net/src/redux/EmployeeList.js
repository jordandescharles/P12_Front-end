import { useSelector } from "react-redux";
import { selectAllEmployees } from "./employeeSlice";

import React from 'react'

const EmployeeList = () => {
  const employees= useSelector(selectAllEmployees )

  const renderedEmployees = employees.map(employee => (
    <li key={employee.id}>
        <span className="firstName">{employee.firstName}</span>
        <span className="lastName">{employee.lastName}</span>
        <span className="startDate">{employee.startDate}</span>
        <span className="department">{employee.department}</span>
        <span className="birthDate">{employee.birthDate}</span>
        <span className="street">{employee.street}</span>
        <span className="city">{employee.city}</span>
        <span className="usState">{employee.state}</span>
        <span className="zipCode">{employee.zipCode}</span>
    </li>
  ))

  return(
    <ul>
        <li>
            <span>First Name</span> 
            <span>Last Name</span>
            <span>Start Date</span>
            <span>department</span>
            <span>Birth Date</span>
            <span>Street</span>
            <span>City</span>
            <span>State</span>
            <span>Zip Code</span>

        </li><br />
        {renderedEmployees}
    </ul>
  )
}

export default EmployeeList