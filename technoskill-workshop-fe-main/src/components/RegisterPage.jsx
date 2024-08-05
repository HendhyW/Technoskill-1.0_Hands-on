import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import swal from 'sweetalert2';

function CheckNameDuplicate(input, search) {
    const length = Object.keys(search.data).length;

    for (let counter = 0; counter < length; counter++) {
        if(search.data[counter]['name'] === input) {
            return true;
        }
    }
    return false;
}

export default function LoginPage(){
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    // const navigate = useNavigate();
    const RegisterHandler = async() => {

        try{
            if(name.length === 0 && password.length === 0){
                swal.fire({
                    icon: "error",
                    iconColor: "#FFFFFF",
                    text: "Mohon masukkan nama dan password terlebih dahulu",
                    color: "#FFFFFF",
                    background: "#303655"
                });
                navigate("/register");
            }
            else if(name.length === 0){
                swal.fire({
                    icon: "error",
                    iconColor: "#FFFFFF",
                    text: "Mohon masukkan nama terlebih dahulu",
                    color: "#FFFFFF",
                    background: "#303655"
                });
                navigate("/register");
            }
            else if(password.length === 0){
                swal.fire({
                    icon: "error",
                    iconColor: "#FFFFFF",
                    text: "Mohon masukkan password terlebih dahulu",
                    color: "#FFFFFF",
                    background: "#303655"
                });
                navigate("/register");
            }
            else{
                const search = await axios.get('http://localhost:8000/manager/',
                    {params: {name: "", password: ""}}
                );
                const isNameDuplicate = CheckNameDuplicate(name, search)
                console.log(isNameDuplicate);

                if(isNameDuplicate == false) {
                    const response = await axios.post('http://localhost:8000/manager/register',{
                        name,
                        password
                    });

                    if(response.status === 201){
                        swal.fire({
                            icon: "success",
                            iconColor: "#FFFFFF",
                            text: "Registrasi berhasil",
                            color: "#FFFFFF",
                            background: "#303655"
                        });
                        navigate("/login");
                    }

                    else{
                        swal.fire({
                            icon: "error",
                            iconColor: "#FFFFFF",
                            text: "Registrasi gagal",
                            color: "#FFFFFF",
                            background: "#303655"
                        });
                        throw new Error("Register failed")
                    }
                } else {
                    swal.fire({
                        icon: "error",
                        iconColor: "#FFFFFF",
                        text: "Nama telah digunakan",
                        color: "#FFFFFF",
                        background: "#303655"
                    });
                }
            }
        }catch (error){
            console.error(error);
        }
    }


    return(
        <div className="bg-[#CED1DA] h-screen w-screen flex">

            <div className="bg-[#798DC5] w-[822px] h-[675px] m-auto rounded-2xl flex flex-row text-white">
            
                <div className="bg-[#2B2E63] w-[622px] h-[675px] rounded-l-2xl flex flex-col text-white">
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
                        <p
                        className="text-white underline text-center"
                        onClick={() => navigate("/login")}
                        >
                        login?
                        </p>
                        <button className="bg-[#6f90AF] p-2 px-3 rounded-2xl" onClick={RegisterHandler}>Register</button>
                    </div>
                </div>
            </div>
        </div>
    )   
}