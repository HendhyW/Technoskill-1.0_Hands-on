import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import DashboardElement from "./elements/DashboardElement";
<<<<<<< Updated upstream
=======
import PopUpElement from "./elements/PopUpElementFailed";

let isLoginDataCorrect = false;
let managerName = "";

export function ShowManagerName(inputName) {
  if(inputName) {managerName = inputName;}
  return managerName;
}

export function isLoggedIn(status) {
  if(status) {isLoginDataCorrect = status;}
  return isLoginDataCorrect;
}
>>>>>>> Stashed changes

export default function LoginPage() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.get("http://localhost:8000/manager/login", {
        name,
        password,
      });

<<<<<<< Updated upstream
      console.log(response.data);
      navigate('/home');
=======
      // Ubah input jadi object
      let loginInput = {
        name : name,
        password : password
      };

      // Mendapatkan jumlah data yang ada di database "manager"
      let iterationLength = Object.keys(response.data).length;

      /*
      Fungsi handleLogin panggil http://localhost:8000/manager/login ga return apapun
      contoh 1.
      Input: {name: 'admin', password: '123'} (ada di DB)
      Output: {}

      contoh 2.
      Input: {name: '', password: ''} (kosong)
      Output: {}

      Untuk setiap kasus input, selalu return {}
      */

      for (let counter = 0; counter < iterationLength; counter++) {
        // Mengecek input terhadap setiap entry di database "manager"
        if(response.data[counter]['name'] === loginInput['name']) {
          if(response.data[counter]['password'] === loginInput['password']) {
            // Bila ketemu, navigate ke home, bila tidak, lihat kode alert
            console.log("Password match found!", counter);
            isLoginDataCorrect = true;
            ShowManagerName(name);
            navigate('/home');
            break;
          }
        }
      }

      if(isLoginDataCorrect == false) {
        alert("Password atau nama anda salah!");
        console.log(response.data, name, password);
      }

>>>>>>> Stashed changes
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="bg-[#CED1DA] h-screen w-screen flex">
      <DashboardElement />

      <div className="bg-[#2B2E63] w-[622px] h-[675px] m-auto rounded-2xl flex flex-col text-white">
        <p className="text-[30px] mx-auto mt-20">Login</p>

        <div className="mx-auto mt-10">
          <p className="text-[20px]">Name</p>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="bg-[#BFCBCE] w-[343px] h-[41px] text-gray-700 px-2"
          />
        </div>

        <div className="mx-auto mt-10">
          <p className="text-[20px]">Password</p>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-[#BFCBCE] w-[343px] h-[41px] text-gray-700 px-2"
          />
        </div>

        <div className="mx-auto mt-20 space-y-4">
          <p
            className="text-white underline"
            onClick={() => navigate("/register")}
          >
            register?
          </p>

          <button className="bg-[#6F90AF] p-2 px-3 rounded-2xl" onClick={handleLogin}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
