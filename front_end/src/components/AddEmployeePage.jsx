import { useState } from "react";
import DashboardElement from "../elements/dashboardelement";

export default function AddEmployeePage(){
    const [name, setName] = useState("");
    const [division, setDivision] = useState("");
    const [salary, setSalary] = useState("");


    return(
        <div className="bg-[#CED1DA] h-screen w-screen flex">
            <DashboardElement/> 
            
            <div className="bg-[#123456] w-[622px] h-[675px]  m-auto rounded-2xl flex flex-col text-white">
                <p className="mx-auto text-white mt-20 text-[30px]">Add New Employee</p>
                
                <div className="mx-auto mt-10">
                    <p className="text-white text-[20px]">Name</p>
                    <input 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        className="bg-[#BFCBCE] w-[343px] h-[41px] text-gray-800 px-2" 
                    />
                </div>

                <div className="mx-auto mt-10">
                    <p className="text-white text-[20px]">Division</p>
                    <input 
                        value={division} 
                        onChange={(e) => setDivision(e.target.value)} 
                        className="bg-[#BFCBCE] w-[343px] h-[41px] text-gray-800 px-2" 
                    />
                </div>

                <div className="mx-auto mt-10">
                    <p className="text-white text-[20px]">Salary</p>
                    <input 
                        value={salary} 
                        onChange={(e) => setSalary(e.target.value)} 
                        className="bg-[#BFCBCE] w-[343px] h-[41px] text-gray-800 px-2" 
                    />
                </div>

                <div className="mx-auto mt-20">
                    <button className="bg-[#6f90AF] p-2 px-3 rounded-2xl">Add</button>
                </div>
            </div>
        </div>
    )   
}