import { useState } from "react";
import DashboardElement from "./elements/DashboardElement";
import axios from 'axios';

export default function EmployeeDetailsPage(){
  return (
    <div className="bg-[#CED1DA] h-screen w-screen flex">
      <DashboardElement />
    </div>
  )
}