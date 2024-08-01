import CrossLogo from "../../assets/cross.svg";

function PopUphandler(choice){
    console.log(choice);
    if (choice == 2){
        return("Login Failed")
    }
}


export default function PopUpElementFailed(choice){


    return(
        <div className="bg-[#303655] w-[500px] h-[300px] rounded-2xl z-50 fixed inset-0 m-auto">
            <div className="m-auto p-3 w-[200px] h-[200px] mt-3">
                <img src={CrossLogo} />
                <p className="text-center text-white text-[25px] mt-5">{PopUphandler(choice)}</p>
                <button></button>
            </div>
        </div>
    )
}