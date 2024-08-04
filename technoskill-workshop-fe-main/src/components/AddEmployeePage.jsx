import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DashboardElement from "./elements/DashboardElement";
import axios from 'axios';
import swal from "sweetalert2";
import { isLoggedIn } from "./LoginPage";

export default function AddEmployeePage() {
  const [name, setName] = useState("");
  const [division, setDivision] = useState("");
  const [salary, setSalary] = useState("");
  const navigate = useNavigate();
  let isLoginDataCorrect = isLoggedIn();

  const handleAddEmployee = async() => {
    if(isLoginDataCorrect == false) {
      swal.fire({
        icon: "error",
        iconColor: "#FFFFFF",
        text: "Harap login terlebih dahulu",
        color: "#FFFFFF",
        background: "#303655"
      });
      navigate("/login");
    }
    try {
      if(name.length === 0 || division.length === 0 || salary.length === 0){
        swal.fire({
          icon: "error",
          iconColor: "#FFFFFF",
          text: "Mohon masukkan nama, divisi, dan salary terlebih dahulu",
          color: "#FFFFFF",
          background: "#303655"
      });
      }
      else {
        const response = await axios.post('http://localhost:8000/employee/add', {
          name,
          division,
          salary
        });

        if(response.status === 201){
          swal.fire({
            icon: "success",
            iconColor: "#FFFFFF",
            text: "Berhasil menambahkan data",
            color: "#FFFFFF",
            background: "#303655"
          });
          navigate("/home");
        }
        else{
          swal.fire({
            icon: "error",
            iconColor: "#FFFFFF",
            text: "Gagal menambahkan data",
            color: "#FFFFFF",
            background: "#303655"
          });
          throw new Error("Add employee failed")
        }

        console.log(response.data);
      }; 
    }catch(error){
      console.error(error);
    }
  }


  return (
    <div className="bg-[#CED1DA] h-screen w-screen flex">
      <DashboardElement />

      <div className="bg-[#2B2E63] w-[622px] h-[675px] m-auto rounded-2xl flex flex-col text-white">
        <p className="text-[30px] mx-auto mt-20">Add New Employee</p>

        <div className="mx-auto mt-10">
          <p className="text-[20px]">Name</p>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="bg-[#BFCBCE] w-[343px] h-[41px] text-gray-700 px-2"
          />
        </div>

        <div className="mx-auto mt-10">
          <p className="text-[20px]">Division</p>
          <input
            value={division}
            onChange={(e) => setDivision(e.target.value)}
            className="bg-[#BFCBCE] w-[343px] h-[41px] text-gray-700 px-2"
          />
        </div>

        <div className="mx-auto mt-10">
          <p className="text-[20px]">Salary</p>
          <input
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
            className="bg-[#BFCBCE] w-[343px] h-[41px] text-gray-700 px-2"
          />
        </div>

        <div className="mx-auto mt-20">
          <button className="bg-[#6F90AF] p-2 px-3 rounded-2xl " onClick={handleAddEmployee}>Add</button>
        </div>
      </div>
    </div>
  );
}
