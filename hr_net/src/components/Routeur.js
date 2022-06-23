import React from 'react';
import App from '../App';
import Employees from './Employees';
import { Route, Routes } from "react-router-dom";
import Homepage from './Homepage';


function Routeur() {
  return (
        <Routes>
          <Route path="/" element={<App />} />
          <Route index element={<Homepage />} />
          <Route path="employees" element={<Employees />}  />
        </Routes>

  );
}

export default Routeur;