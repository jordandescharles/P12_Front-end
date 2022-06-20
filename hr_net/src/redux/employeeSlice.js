import { createSlice } from '@reduxjs/toolkit'

const initialState = [
     {id:'0001', firstName:'test', lastName:'test',startDate:'test',department:'test',birthDate:'test',street:'test',city:'test',state:'test',zipCode:'test',},
     {id:'0002', firstName:'blablabla', lastName:'test',startDate:'test',department:'test',birthDate:'test',street:'test',city:'test',state:'test',zipCode:'test',},
  ]

const employeeSlice = createSlice({
    name: 'employee',
    initialState,
    reducers: {
      addUser: (state,action) => {
            state.push(action.payload)
      },
    },
  })

export const selectAllEmployees = (state) => state.employees;

export const {addUser} = employeeSlice.actions

  export default employeeSlice.reducer