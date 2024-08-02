import DashboardElement from "./elements/DashboardElement";
import PopUpElement from "./elements/PopUpElementFailed"
import { useEffect, useState } from "react";
import axios from "axios";

import { useNavigate } from "react-router-dom";
import React from "react";
import Popup from 'reactjs-popup'
import { isLoggedIn } from "./LoginPage";

let employee_data;

export function EmployeeData(employee){
  if(employee){
    employee_data = employee;
  }
  return employee_data;
}

export default function HomePage() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  let isLoginDataCorrect = isLoggedIn();


  const handleHomePage = async () => {
    if(isLoginDataCorrect == false) {
      navigate("/login");
    }
    try {
      const response = await axios.get("http://localhost:8000/employee/");
      console.log(response.data);

      setData(response.data);

    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    handleHomePage();
  }, []);

  return (

    <div className="bg-[#CED1DA] flex">
      <DashboardElement />

      <div className="overflow-y-scroll bg-[#798DC5] w-[1400px] h-screen m-auto flex-1" >
      
        
        <ol className="overflow-auto w-full">
          {data.map((employee, index) => (
            <li
              key={index}
              className="text-white text-[20px] p-3 flex flex-col bg-[#737CCF] m-2 rounded-2xl hover:bg-[#303655]"
              onClick={() => {navigate("/employee-details"); EmployeeData(employee)}}
            >
              <p>{employee.name}</p>
              <p>{employee.division}</p>
              <p>{employee.salary}</p>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

const data = [
  {
    name: "ABC",
    div: "HR",
    salary: "Rp 5000",
  },
  {
    name: "JHK",
    div: "HR",
    salary: "Rp 5000",
  },
  {
    name: "POI",
    div: "HR",
    salary: "Rp 5000",
  },
  {
    name: "KKK",
    div: "HR",
    salary: "Rp 5000",
  },
];
