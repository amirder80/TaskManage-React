import Task from "./Task/Task.jsx";
import {useRef, useState} from "react";

// eslint-disable-next-line react/prop-types
const TaskBox = ({title,id,Data,set}) => {

    let [counter, setCounter] = useState(3)
    const coverEL = useRef();
    const inputEl = useRef();
    const open=()=>{
        coverEL.current.classList.remove("hidden")
    }
    const close=()=>{
        coverEL.current.classList.add("hidden")
    }
    const handleChildElementClick = (e) => {
        /*prevent child */
        e.stopPropagation()
    }


    const save=()=>{

        // eslint-disable-next-line react/prop-types
        let updateD= Data.map((group)=>{
            if (group.id===id){
                group.state.push({id:counter,task:inputEl.current.value})
                return group
            }
            return group
        })
        set(updateD)
        inputEl.current.value=""
        setCounter(++counter)
        coverEL.current.classList.add("hidden")
    }
    const deleteTask=(taskId)=>{
        // eslint-disable-next-line react/prop-types
        let updateD= Data.map((group)=>{
            if (group.id===id){

                for (let i = 0; i < group.state.length; i++) {
                    if (group.state[i].id===taskId){
                        group.state.splice(i,1)
                    }
                }

                return group
            }
            return group
        })
        set(updateD)
    }

    const rightArrowHandler=(element,id)=>{
        deleteTask(element.id)
        if (id<3){
            id++
        }
        else if(id===3){
            id=1
        }
        setCounter(++counter)
        // eslint-disable-next-line react/prop-types
        let updateD= Data.map((group)=>{
            if (group.id===id){
                group.state.push({id:counter,task:element.task})
                return group
            }
            return group
        })
        set(updateD)
        console.log(Data)

    }

    const leftArrowHandler=(element,id)=>{
        deleteTask(element.id)
        if (id>1){
            id--
        }
        else if(id===1){
            id=3
        }
        setCounter(++counter)
        // eslint-disable-next-line react/prop-types
        let updateD= Data.map((group)=>{
            if (group.id===id){
                group.state.push({id:counter,task:element.task})
                return group
            }
            return group
        })
        set(updateD)
        console.log(Data)

    }



    return (
        <>
            <div className={"flex flex-col items-center"}>

                <h3 className={"mb-8"}>{title}</h3>


                {/*tasks components*/}

                {/* eslint-disable-next-line react/prop-types */}
                {Data[id-1].state.map((e)=>{
                    return <Task key={e.id} task={e.task} deleteHandler={()=>deleteTask(e.id)} leftArrowHandler={()=>leftArrowHandler(e,id)} rightArrowHandler={()=>rightArrowHandler(e,id)}/>
                })}




                {/*btns*/}

                <div onClick={close} ref={coverEL} className={"top-0 left-0 absolute w-full h-full [background-color:#59595959] hidden z-10"}>
                    <div onClick={(e)=>handleChildElementClick(e)} className={"w-[600px] h-[300px] bg-[#739da9] rounded mx-auto z-20 mt-[100px] text-black flex flex-col items-center gap-6 py-5"}>
                        <h6>Task level {id}</h6>
                        <input ref={inputEl} type="text" placeholder={"Enter your task :"} className={"p-4 text-center rounded"}/>
                        <input type={"submit"} value={"Save"} className={"cursor-pointer bg-blue-300 p-2 rounded"} onClick={save}/>
                    </div>
                </div>

                <div onClick={open} className={"w-[30px] h-[30px] bg-[#A0D2BD] rounded-2xl mt-8 cursor-pointer text-[#132843]"}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path>
                    </svg>
                </div>



            </div>
        </>
    )
}
export default TaskBox