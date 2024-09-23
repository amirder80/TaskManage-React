import ArrowBtn from "./ArrowBtn.jsx";


// eslint-disable-next-line react/prop-types
const Task = ({task,deleteHandler,rightArrowHandler,leftArrowHandler}) => {






    return (
        <>
            <div className={"flex flex-col items-center border-2 border-[#3D5060] p-5"}>

                <div className={"flex flex-row gap-5 "}>
                    <ArrowBtn btnHandler={leftArrowHandler} direction={"left"}/>
                    <div>{task}</div>
                    <ArrowBtn btnHandler={rightArrowHandler} direction={"right"}/>
                </div>

                <span onClick={deleteHandler} className={"bg-red-800 text-white w-[30px] h-[30px] rounded p-1 mt-2 flex cursor-pointer"}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path
                        d="M7 4V2H17V4H22V6H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V6H2V4H7ZM6 6V20H18V6H6ZM9 9H11V17H9V9ZM13 9H15V17H13V9Z"></path></svg>
                </span>

            </div>

        </>
    )
}

export default Task