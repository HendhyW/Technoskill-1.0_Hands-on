import { BrowserRouter, Routes, Route, Navigate, redirect } from "react-router-dom";

import HomePage from "./components/HomePage";
import AddEmployeePage from "./components/AddEmployeePage";
import MyInfoPage from "./components/MyInfoPage";
import LoginPage from "./components/LoginPage";
import EmployeeDetailsPage from "./components/EmployeeDetailsPage";
import RegisterPage from "./components/RegisterPage";

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route
            path="*"
            element={<Navigate to="/home" replace />}
        />

        <Route path="/home" element={<HomePage />} />

        <Route path="/add-employee" element={<AddEmployeePage />} />

        <Route path="/my-info" element={<MyInfoPage />} />

        <Route path="/login" element={<LoginPage />} />
      
        <Route path="/register" element={<RegisterPage />} />

        <Route path="/employee-details" element={<EmployeeDetailsPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
