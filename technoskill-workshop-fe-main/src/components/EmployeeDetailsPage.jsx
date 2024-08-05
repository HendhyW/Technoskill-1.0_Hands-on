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
  const navigate = useNavigate();
  const handleEmployeeDetails = async () => {
    if(isLoginDataCorrect == false) {
      navigate("/login");
      swal.fire({
        icon: "error",
        iconColor: "#FFFFFF",
        text: "Harap login terlebih dahulu",
        color: "#FFFFFF",
        background: "#303655"
      });
    }
  }

  useEffect(() => {
    handleEmployeeDetails();
  }, []);

  let employee_details = EmployeeData();
  let isLoginDataCorrect = isLoggedIn();
  
  

  const handleRemoveEmployee = async () => {
    try {
      const id = employee_details['id'];
      const response = await axios.delete(
        'http://localhost:8000/employee/remove', 
        {data: {id}} 
      );
      navigate("/home");
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  const Popup = () => {
    swal.fire({
      title: "Hapus Data?",
      text: "Apakah anda ingin menghapus data ini?",
      color: "#FFFFFF",
      background: "#303655",
      icon: "warning",
      iconColor: "#FFFFFF",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Hapus"
    }).then((result) => {
      if (result.isConfirmed) {
        swal.fire({
          text: "Data telah terhapus",
          color: "#FFFFFF",
          background: "#303655",
          icon: "success",
          iconColor: "#FFFFFF"
        })
        handleRemoveEmployee();
      }
    });
  }

  if(employee_details){

  console.log(employee_details);

  return (
    <div className="bg-[#CED1DA] h-screen w-screen flex">
      <div className="bg-[#CED1DA] h-screen w-screen flex">
      <DashboardElement />

      <div className="bg-[#798DC5] w-[1000px] h-[675px] m-auto rounded-2xl flex flex-row text-white">
        
        <img src={employeeIcon} className="w-[200px] ml-[45.5px] mr-[45.5px] al-left"/>

        <div className="bg-[#2B2E63] w-[622px] h-[675px] flex flex-col text-white">
          <p className="text-[30px] mx-auto mt-[45px]">Employee Info</p>

          <div className="mx-auto mt-[50px]">
            <p className="text-[20px] mt-[70px] flex flex-col">
              <span>  Name </span>
              <span className="bg-[#BFCBCE] py-1 px-2 mx-auto w-[350px] h-auto text-black text-[20px] break-all">
                {employee_details['name']}
              </span>
            </p>
            <p className="text-[20px] mt-[20px] flex flex-col">
              <span>  Division </span>
              <span className="bg-[#BFCBCE] py-1 px-2 mx-auto w-[350px] h-auto text-black text-[20px] break-all">
                {employee_details['division']}
              </span>
            </p><p className="text-[20px] mt-[20px] flex flex-col">
              <span>  Salary </span>
              <span className="bg-[#BFCBCE] py-1 px-2 mx-auto w-[350px] h-auto text-black text-[20px] break-all">
                {employee_details['salary']}
              </span>
            </p>
          </div>

          <img src={trashcanIcon}
          className="w-[50px] fixed mt-[575px] mx-[280px] hover:outline hover:outline-[#FFFFFF] outline-offset-8 rounded-lg"
          onClick={Popup}
          />

        </div>
        
      </div>
    </div>
      
    </div>
  );
}
}