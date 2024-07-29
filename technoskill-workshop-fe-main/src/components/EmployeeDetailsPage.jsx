import { useState } from "react";
import DashboardElement from "./elements/DashboardElement";
import axios from 'axios';

import { EmployeeData } from "./HomePage";

export default function EmployeeDetailsPage(){
  let employee_details = EmployeeData();
  console.log(employee_details);
  return (
    <div className="bg-[#CED1DA] h-screen w-screen flex">
      <DashboardElement />
      
    </div>
  )
}