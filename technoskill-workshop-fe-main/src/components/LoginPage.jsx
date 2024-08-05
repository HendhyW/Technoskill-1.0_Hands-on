import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert2"

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

export default function LoginPage() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  isLoginDataCorrect = false;
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {

      // Kenapa ga pake http://localhost:8000/manager/login ?
      // Lihat komen dibawah
      const response = await axios.get("http://localhost:8000/manager/", {
        name,
        password
      });


      // Ubah input jadi object
      let loginInput = {
        name : name,
        password : password
      };

      // Mendapatkan jumlah data yang ada di database "manager"
      let iterationLength = Object.keys(response.data).length;

      let inputnamelength = Object.keys(loginInput['name']).length;
      let inputpasslength = Object.keys(loginInput['password']).length;

      console.log(loginInput['name']);

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
            swal.fire({
              icon: "success",
              iconColor: "#FFFFFF",
              text: "Login Succes",
              color: "#FFFFFF",
              background: "#303655"
            });
            navigate('/home');
            break;
          }
        }
      }

      if(!loginInput['name'] || !loginInput['password']) {
        swal.fire({
          icon: "error",
          iconColor: "#FFFFFF",
          text: "Silahkan masukkan nama dan password terlebih dahulu",
          color: "#FFFFFF",
          background: "#303655"
        });
      }

      if(isLoginDataCorrect == false) {
        swal.fire({
          icon: "error",
          iconColor: "#FFFFFF",
          text: "Login Failed",
          color: "#FFFFFF",
          background: "#303655"
        });
      }


    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="bg-[#CED1DA] h-screen w-screen flex">

      <div className="bg-[#798DC5] w-[822px] h-[675px] m-auto rounded-2xl flex flex-row text-white">

        <div className="bg-[#2B2E63] w-[622px] h-[675px] rounded-l-2xl flex flex-col text-white">
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
              className="text-white underline text-center"
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

    </div>
    
  );
}
