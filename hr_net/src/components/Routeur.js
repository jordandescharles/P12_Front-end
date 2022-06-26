import React from 'react';
import App from '../App';
import { Route, Routes } from "react-router-dom";
import Homepage from '../pages/Homepage';
import EmployeeList from '../pages/EmployeeList';

function Routeur() {
  return (
        <Routes>
          <Route path="/" element={<App />} />
          <Route index element={<Homepage />} />
          <Route path="employees" element={<EmployeeList />}  />
        </Routes>

  );
}

export default Routeur;