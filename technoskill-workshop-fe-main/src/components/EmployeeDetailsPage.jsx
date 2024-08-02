import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DashboardElement from "./elements/DashboardElement";
import axios from 'axios';
import React from "react";
import swal from "sweetalert2";
import { EmployeeData } from "./HomePage";
import employeeIcon from "../assets/employee.svg";
import trashcanIcon from "../assets/trashcan.svg";
import { isLoggedIn } from "./LoginPage";

export default function EmployeeDetailsPage(){
  
  let employee_details = EmployeeData();
  const navigate = useNavigate();
  let isLoginDataCorrect = isLoggedIn();
  
  const handleEmployeeDetails = async () => {
    if(isLoginDataCorrect == false) {
      navigate("/login");
    }
  }

  const handleRemoveEmployee = async () => {
    try {
      const name = employee_details['name'];
      const response = await axios.delete(
        'http://localhost:8000/employee/remove', 
        {data: {name}} 
      );
      navigate("/home");
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  const Popup = () => {
    swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        })
          handleRemoveEmployee();
        
      }
    });
  }

  useEffect(() => {
    handleEmployeeDetails();
  }, []);

  console.log(employee_details);

  return (
    <div className="bg-[#CED1DA] h-screen w-screen flex">
      <div className="bg-[#CED1DA] h-screen w-screen flex">
      <DashboardElement />

      <div className="bg-[#2B2E63] w-[622px] h-[675px] m-auto rounded-2xl flex flex-col text-white">

        <img src={trashcanIcon}
          className="w-[50px] fixed mt-5 ml-5 hover:outline hover:outline-[#FFFFFF] outline-offset-8 rounded-lg"
          onClick={Popup}
        />
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
  );
}