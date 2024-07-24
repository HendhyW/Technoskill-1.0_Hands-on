import { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"

import HomePage from "./components/HomePage";
import AddEmployee from "./components/AddEmployeePage"
import MyInfoPages from './components/MyInfoPage';
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";

function App() {
  return (
    
      <BrowserRouter>
        <Routes>
          <Route path ="/home" element={<HomePage />} />
          <Route path ="/add" element={<AddEmployee />} />
          <Route path ="/my-info" element={<MyInfoPages />} />
          <Route path ="/login" element={<LoginPage />} />
          <Route path ="/register" element={<RegisterPage />} />
        </Routes>
      </BrowserRouter>
    
  );
}

export default App
