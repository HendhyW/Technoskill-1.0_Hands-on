import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import DashboardElement from "./elements/DashboardElement";

import employeeIcon from "../assets/employee.svg";


import { ShowManagerName } from "./LoginPage";
import { isLoggedIn } from "./LoginPage";

export default function MyInfoPage() {
  const name = ShowManagerName();
  const navigate = useNavigate();
  let isLoginDataCorrect = isLoggedIn();

  const handleMyInfoPage = async () => {
    if(isLoginDataCorrect == false) {
      navigate("login");
    }
  }

  useEffect(() => {
    handleMyInfoPage();
  }, []);


  return (
    <div className="bg-[#CED1DA] h-screen w-screen flex">
      <DashboardElement />

      <div className="bg-[#2B2E63] w-[622px] h-[675px] m-auto rounded-2xl flex flex-col text-white">
        <img src={employeeIcon} className="w-[240px] mx-auto mt-24" />

        <p className="text-[30px] mx-auto mt-20">My Info</p>

        <div className="mx-auto mt-10">
          <p className="text-[25px]">Name</p>
          <div className="mx-auto rounded-2x1 text-white text-[25px]">
            {name}
          </div>
        </div>
      </div>
    </div>
  );
}
