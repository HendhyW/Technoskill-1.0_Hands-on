import DashboardElement from "../elements/dashboardelement"


export default function HomePage(){
    return(
        <div className="bg-[#CED1DA] flex ">

            <DashboardElement />

            <div className="bg-[#798DC5] w-[1400px] h-screen m-auto rounded-2xl flex-1 ">
                <ol className="mx-4 overflow-auto w-full  py-3"> 
                    {data.map((employee,index) =>(
                        <li 
                            key={index} 
                            className="text-white text-[20px] p-3 flex flex-col bg-[#737CCF] m-2 rounded-2xl py-1000"
                        >
                            <p>{employee.name}</p>
                            <p>{employee.div}</p>
                            <p>{employee.salary}</p>
                        </li>
                    ))
                    }
                </ol>
            </div>

        </div>
    )
}

const data = [
    {
        name : "ABC",
        div : "HR",
        salary : "$00"
    },
    {
        name : "DEF",
        div : "HR",
        salary : "$00"
    },
    {
        name : "GHI",
        div : "HR",
        salary : "$00"
    },
    {
        name : "JKL",
        div : "HR",
        salary : "$00"
    },
    {
        name : "LMN",
        div : "HR",
        salary : "$00"
    },
];