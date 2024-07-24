import LogoHome from "../assets/home.svg"
import LogoPerson from "../assets/addPerson.svg"
import LogoInfo from "../assets/person.svg"
import LogoLogin from "../assets/login_icon.svg"
import LogoLogout from "../assets/logout_icon.svg"
import { useNavigate } from "react-router-dom"


export default function DashboardElement(){
    const navigate = useNavigate();
    return(
        
        <div className="bg-[#123456] h-screen w-[390px] flex flex-col py-8">
            
            
            {/* menu My Info */}
            <div className="flex ml-5" onClick={() => navigate("/my-info")}>
                <img src={LogoInfo} />
                <p className="my-auto text-white ml-5 text-[20px] ">
                    My Info
                </p>
            </div>

            {/* menu add employee */}
            <div className="flex ml-5 mt-5" onClick={() => navigate("/add")}>
                <img src={LogoPerson} />
                <p className="my-auto text-white ml-5 text-[20px] ">
                    Add Employee
                </p>
            </div>
            
            {/* menu home */}
            <div className="flex ml-5 mt-5" onClick={() => navigate("/home")}>
                <img src={LogoHome} />
                <p className="my-auto text-white ml-5 text-[20px] ">
                    Home
                </p>
            </div>

            {/* menu login */}
            <div className="flex ml-5 mt-5" onClick={() => navigate("/login")}>
                <img src={LogoLogin} />
                <p className="my-auto text-white ml-5 text-[20px] ">
                    Login
                </p>
            </div>

            {/* menu logout */}
            <div className="flex ml-5 mt-5" onClick={() => navigate("/home")}>
                <img src={LogoLogout} />
                <p className="my-auto text-white ml-5 text-[20px] ">
                    Log-out
                </p>
            </div>
        </div>
    )
}