import { useState } from "react";
import axios from 'axios';

// import { useNavigate } from "react-router-dom"
import DashboardElement from "./elements/DashboardElement";

export default function LoginPage(){
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    // const navigate = useNavigate();
    const RegisterHandler = async() => {
        try{
            const response = await axios.post('http://localhost:8000/manager/register',{
                name,
                password
            });
            if(response.status !== 201) throw new Error("Register failed");
            console.log(response.data);
        }catch (error){
            console.error(error);
        }
    }


    return(
        <div className="bg-[#CED1DA] h-screen w-screen flex">
            <div className="bg-[#2B2E63] w-[622px] h-[675px]  m-auto rounded-2xl flex flex-col text-white">
                <p className="mx-auto text-white mt-20 text-[30px]">Register</p>
                
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

                    <button className="bg-[#6f90AF] p-2 px-3 rounded-2xl" onClick={RegisterHandler}>Register</button>
                </div>
            </div>
        </div>
    )   
}