import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { Link } from "react-router-dom";
import { addUser } from '../redux/employeeSlice';
import SelectMenu from './SelectMenu';


function Form() {

    // USE STATE FOR FIELDS
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [startDate, setStartDate] = useState('')
    const [department, setDepartment] = useState('')
    const [birthDate, setBirthDate] = useState('')
    const [street, setStreet] = useState('')
    const [city, setCity] = useState('')
    const [usState, setUsState] = useState('')
    const [zipCode, setZipCode] = useState('')

    // HANDLECHANGES AND SET STATE
    const onFirstNameChange = e => setFirstName(e.target.value)
    const onLastNameChange = e => setLastName(e.target.value)
    const onStartDateChange = e => setStartDate(e.target.value)
    const onDepartmentChange = e => setDepartment(e.target.value)
    const onBirthDateChange = e => setBirthDate(e.target.value)
    const onStreetChange = e => setStreet(e.target.value)
    const onCityChange = e => setCity(e.target.value)
    const onUsStateChange = e => setUsState(e.target.value)
    const onZipCodeChange = e => setZipCode(e.target.value)

    const dispatch = useDispatch()

    const saveEmployee = () => {
        if (
            firstName.length < 2 ||
            lastName.length < 2 ||
            department.length < 2 ||
            street.length < 2 ||
            city.length < 2 ||
            usState.length < 2 ||
            birthDate === '' ||
            startDate === '' ||
            zipCode === ''
          ) {
            alert('Please fill all the fields with 2 character minimum.');
            return false;
          }

        dispatch(
            addUser({
                id: nanoid(),
                firstName: firstName,
                lastName: lastName,
                startDate: startDate,
                department: department,
                birthDate: birthDate,
                street: street,
                city: city,
                usState: usState,
                zipCode: zipCode
            })
        )
        setFirstName('')
        setLastName('')
        setStartDate('')
        setDepartment('')
        setBirthDate('')
        setStreet('')
        setCity('')
        setUsState('')
        setZipCode('')
    } 
    

    return (
    
        <div>
            <Link to="employees">View Current Employees</Link>
            <br /><br />
            <div className="container">
                <h2>Create Employee</h2>
                <form action="#" id="create-employee">
                    <div >
                        <fieldset className="address">
                            <legend>Infos</legend>
                            <label htmlFor="first-name" >First Name</label>
                            <input id="first-name" onChange={onFirstNameChange} value={firstName} />
                            <label htmlFor="last-name">Last Name</label>
                            <input id="last-name" onChange={onLastNameChange} value={lastName}  />
                            <label htmlFor="date-of-birth">Date of Birth</label>
                             <input id="date-of-birth" onChange={onBirthDateChange} type="date" value={birthDate} /> 
                            <label htmlFor="start-date">Start Date</label>
                            <input id="start-date" onChange={onStartDateChange} type="date"  value={startDate} />
                        </fieldset>

                    </div>
                    <div >
                        <fieldset className="address">
                            <legend>Address</legend>
                            <label htmlFor="street" >Street</label>
                            <input id="street" onChange={onStreetChange} value={street} />
                            <label htmlFor="city" >City</label>
                            <input id="city" onChange={onCityChange} value={city} />
                            <label htmlFor="state">State</label>
                            <SelectMenu onChange={onUsStateChange}/>
                            <label htmlFor="zip-code">Zip Code</label>
                            <input id="zip-code" type="number" onChange={onZipCodeChange} value={zipCode} />
                            <label htmlFor="department">Department</label>
                            <select name="department" id="department" onChange={onDepartmentChange} defaultValue={"deptSelect"}>
                            <option value="deptSelect" disabled >Select  department</option>
                                <option>Sales</option>
                                <option>Marketing</option>
                                <option>Engineering</option>
                                <option>Human Resources</option>
                                <option>Legal</option>
                            </select>
                        </fieldset>
                    </div>
                </form>
                <button className='btn' onClick={saveEmployee} type="submit">Save</button>
            </div>
        </div>
    );
}

export default Form;