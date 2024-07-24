import { useState } from "react";

import DashboardElement from "../elements/dashboardelement"
import MyInfoIcon from "../assets/logo_myinfo.svg"

export default function MyInfoPages(){
    const [name, setName] = useState("");
    return(
        <div className="bg-[#CED1DA] h-screen w-screen flex">
            <DashboardElement/> 
            
            <div className="bg-[#123456] w-[622px] h-[675px]  m-auto rounded-2xl flex flex-col text-white">
                <img src={MyInfoIcon} className="w-[240px] mx-auto mt-24" />
                
                <p className="mx-auto text-white mt-20 text-[30px]">My Info</p>
                
                <div className="mx-auto mt-10">
                    <p className="text-white text-[20px]">Name</p>
                    <input 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        className="bg-[#BFCBCE] w-[343px] h-[41px] text-gray-800 px-2" 
                    />
                </div>

            </div>
        </div>
    )
}