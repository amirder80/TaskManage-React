
import "../App/app.css"
import TaskBox from "./TaskBox/TaskBox.jsx";
import {useState} from "react";
import data from "../../Data.js";

const Layout = () => {
    const [Data, setData] = useState(data);

    return (
        <>

            <section className={"w-full h-full pt-[50px] mx-auto text-white flex flex-col items-center"}>

                <h1 className={"text-3xl"}>Task Management</h1>

                <section className={"border-2 border-[#6E8C9C] p-5 mt-9 flex flex-row gap-4"}>

                    {Data.map(e=><TaskBox key={e.id} title={e.title} id={e.id} Data={Data} set={setData}/>)}


                    {/*<TaskBox title={"Backlog"} id={1} Data={Data} set={()=>setData}/>
                    <TaskBox title={"In Progress"} id={2} Data={Data} set={()=>setData}/>
                    <TaskBox title={"Done"} id={3} Data={Data} set={()=>setData}/>*/}


                </section>

            </section>

        </>
    )
}
export default Layout