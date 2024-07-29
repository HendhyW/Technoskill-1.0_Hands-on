import { useState } from "react";
import DashboardElement from "./elements/DashboardElement";
import axios from 'axios';

import { EmployeeData } from "./HomePage";

import employeeIcon from "../assets/employee.svg";

export default function EmployeeDetailsPage(){
  
  let employee_details = EmployeeData();
  console.log(employee_details);

  return (
    <div className="bg-[#CED1DA] h-screen w-screen flex">
      <div className="bg-[#CED1DA] h-screen w-screen flex">
      <DashboardElement />

      <div className="bg-[#2B2E63] w-[622px] h-[675px] m-auto rounded-2xl flex flex-col text-white">
        <img src={employeeIcon} className="w-[240px] mx-auto mt-24" />

        <p className="text-[30px] mx-auto mt-15">Employee Info</p>

        <div className="mx-auto mt-10">
          <p className="text-[25px]">
            <span>  Name: </span>
            <span className="mx-auto rounded-2x1 text-white text-[25px]">
              {employee_details['name']}
            </span>
          </p>
          <p className="text-[25px]">
            <span>  Division: </span>
            <span className="mx-auto rounded-2x1 text-white text-[25px]">
              {employee_details['division']}
            </span>
          </p>
          <p className="text-[25px]">
            <span>  Salary: </span>
            <span className="mx-auto rounded-2x1 text-white text-[25px]">
              {employee_details['salary']}
            </span>
          </p>
        </div>
      </div>
    </div>
      
    </div>
  )
}