import CheckLogo from "../../assets/check.svg";

function PopUphandler(choice){
    if (choice == 2){
        return("Login Failed")
    }
}


export default function PopUpElementSucces(choice){


    return(
        <div className="bg-[#303655] w-screen h-[300px] rounded-2xl z-50 fixed inset-0 m-auto">
            <div className="m-auto p-3 w-[200px] h-[200px]">
                <img src={CheckLogo} />
                <p>{PopUphandler(choice)}</p>
                <button></button>
            </div>
        </div>
    )
}