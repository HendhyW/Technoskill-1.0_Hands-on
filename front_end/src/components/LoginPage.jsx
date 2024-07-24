import { useState } from "react";
import { useNavigate } from "react-router-dom"
import DashboardElement from "../elements/dashboardelement";

export default function LoginPage(){
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();


    return(
        <div className="bg-[#CED1DA] h-screen w-screen flex">
            <DashboardElement/> 
            
            <div className="bg-[#123456] w-[622px] h-[675px]  m-auto rounded-2xl flex flex-col text-white">
                <p className="mx-auto text-white mt-20 text-[30px]">Login</p>
                
                <div className="mx-auto mt-10">
                    <p className="text-white text-[20px]">Name</p>
                    <input 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        className="bg-[#BFCBCE] w-[343px] h-[41px] text-gray-800 px-2" 
                    />
                </div>

                <div className="mx-auto mt-10">
                    <p className="text-white text-[20px]">Password</p>
                    <input 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        className="bg-[#BFCBCE] w-[343px] h-[41px] text-gray-800 px-2" 
                    />
                </div>

                

                <div className="mx-auto mt-20 space-y-4">
                <p 
                    className="text-white underline" 
                    onClick={() => navigate("/register")}
                >
                    register?
                </p>

                    <button className="bg-[#6f90AF] p-2 px-3 rounded-2xl">Login</button>
                </div>
            </div>
        </div>
    )   
}