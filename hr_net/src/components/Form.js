import React from 'react';
import states from '../datas/states';
import { useEffect,useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';

import { addUser } from '../redux/employeeSlice';


function Form() {

    useEffect(() => {
        const stateSelect = document.getElementById('state');
        //check if stateSelect has child to fill it with states
        if (!stateSelect.hasChildNodes()) {
            states.forEach(function (state) {
                const option = document.createElement('option');
                option.value = state.abbreviation;
                option.text = state.name;
                stateSelect.appendChild(option);
            })
        }
    });

    const[firstName,setFirstName] = useState('')
    const[lastName,setLastName] = useState('')
    const[startDate,setStartDate] = useState('')
    const[department,setDepartment] = useState('')
    const[birthDate,setBirthDate] = useState('')
    const[street,setStreet] = useState('')
    const[city,setCity] = useState('')
    const[usState, setUsState] = useState('')
    const[zipCode, setZipCode] = useState('')

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
        if(firstName && lastName && startDate && department && birthDate && street && city && usState && zipCode){
            dispatch(
                addUser({
                    id: nanoid(0),
                    firstName:firstName,
                    lastName:lastName,
                    startDate:startDate,
                    department:department,
                    birthDate:birthDate,
                    street:street,
                    city:city,
                    usState:usState,
                    zipCode:zipCode
                })
            )
            console.log("nope")
        }
    
    }


    return (
        <div>                
            <a href="employee-list.html">View Current Employees</a>
            <br /><br />
            <div className="container">
                <h2>Create Employee</h2>
                <form action="#" id="create-employee">
                    <div >
                        <fieldset className="address">
                            <legend>Infos</legend>
                            <label htmlFor="first-name" >First Name</label>
                            <input id="first-name" onChange={onFirstNameChange} value={firstName}/>
                            <label htmlFor="last-name">Last Name</label>
                            <input  id="last-name" onChange={onLastNameChange} value={lastName} />
                            <label htmlFor="date-of-birth">Date of Birth</label>
                            <input id="date-of-birth"  onChange={onBirthDateChange} value={birthDate}/>
                            <label htmlFor="start-date">Start Date</label>
                            <input id="start-date" onChange={onStartDateChange} value={startDate}/>
                        </fieldset>

                    </div>
                    <div >
                        <fieldset className="address">
                            <legend>Address</legend>
                            <label htmlFor="street" >Street</label>
                            <input id="street" onChange={onStreetChange} value={street}/>
                            <label htmlFor="city" >City</label>
                            <input id="city" onChange={onCityChange} value={city} />
                            <label htmlFor="state">State</label>
                            <select name="state" id="state"onChange={onUsStateChange} value={usState}></select>
                            <label htmlFor="zip-code">Zip Code</label>
                            <input id="zip-code" type="number" onChange={onZipCodeChange} value={zipCode}/>
                            <label htmlFor="department">Department</label>
                            <select name="department" id="department" onChange={onDepartmentChange} value={department}>
                                <option>Sales</option>
                                <option>Marketing</option>
                                <option>Engineering</option>
                                <option>Human Resources</option>
                                <option>Legal</option>
                            </select>
                        </fieldset>
                    </div>
                </form>
                <button className='btn' onClick={saveEmployee} type="button">Save</button>
            </div>
        </div>
    );
}

export default Form;