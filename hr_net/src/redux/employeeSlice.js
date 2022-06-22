import { createSlice } from '@reduxjs/toolkit'

const initialState = [
     
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