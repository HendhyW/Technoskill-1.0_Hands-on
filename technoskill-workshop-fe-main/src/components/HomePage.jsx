import DashboardElement from "./elements/DashboardElement";
import PopUpElement from "./elements/PopUpElementFailed"
import { useEffect, useState } from "react";
import axios from "axios";

export default function HomePage() {
  const [data, setData] = useState([]);

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
      navigate("login");
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
      {/* <PopUpElement /> */}
      

      <div className="bg-[#798DC5] w-[1400px] h-[841px] m-auto rounded-2xl flex-1" >
      
      
      {/* <Popup trigger={<button className="m-auto"> Trigger</button>} position="right center">
        <div className="bg-[#303655] w-[500px] h-[300px] m-auto rounded-2xl">
          <div>Popup content here !!</div>
        </div>
      </Popup>
         */}
        
        <ol className="overflow-auto w-full">
          {data.map((employee, index) => (
            <li
              key={index}
              className="text-white text-[20px] p-3 flex flex-col bg-[#737CCF] m-2 rounded-2xl"
              onClick={() => {navigate("/employee-details"); EmployeeData(employee)}}
            >
              <p>{employee.name}</p>
              <p>{employee.division}</p>
              <p>{employee.salary}</p>
            </li>
          ))}
        </ol>

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
