import { useNavigate } from "react-router-dom";

import homeIcon from "../../assets/home.svg";
import addEmployeeIcon from "../../assets/addPerson.svg";
import myInfoIcon from "../../assets/person.svg";
import logoutIcon from "../../assets/logout.svg";

import { isLoggedIn } from "../LoginPage";
import swal from "sweetalert2";

export default function DashboardElement() {
  const navigate = useNavigate();

  return (
    <div className="bg-[#2B2E63] h-screen w-[390px] flex flex-col py-8">
      <div className="flex ml-10 w-[300px] hover:outline hover:outline-[#FFFFFF] outline-offset-8 rounded-2xl" onClick={() => navigate("/my-info")}>
        <img src={myInfoIcon} />

        <p className="my-auto text-white ml-5 text-[20px]">My Info</p>
      </div>

      <div className="flex mt-5 ml-10 w-[300px] hover:outline hover:outline-[#FFFFFF] outline-offset-8 rounded-2xl" onClick={() => navigate("/home")}>
        <img src={homeIcon} />

        <p className="my-auto text-white ml-5 text-[20px]">Home</p>
      </div>

      <div className="flex mt-5 ml-10 w-[300px] hover:outline hover:outline-[#FFFFFF] outline-offset-8 rounded-2xl" onClick={() => navigate("/add-employee")}>
        <img src={addEmployeeIcon} />

        <p className="my-auto text-white ml-5 text-[20px]">Add Employee</p>
      </div>

      <div className="flex mt-5 ml-10 w-[300px] hover:outline hover:outline-[#FFFFFF] outline-offset-8 rounded-2xl" onClick={() => 
      {navigate('/login');
        swal.fire({
        icon: "success",
        iconColor: "#FFFFFF",
        text: "Anda telah log-out",
        color: "#FFFFFF",
        background: "#303655"
        });
        isLoggedIn(false); 
        console.log(isLoggedIn(false))
        }}>
      <img src={logoutIcon} />

      <p className="my-auto text-white ml-5 text-[20px]">Logout</p>
      </div>
    </div>
  );
}
