import "./todoStyle.css"
import { useState } from "react";
import TodoList from "./todoList";
function TODO(){
    const [taskName, setTaskName]= useState("");
    const [allTaskList,setAllTaskList]=useState([])
    function handleChange(e){
        const value = e.target.value;
        setTaskName(value)
    }
    function handleClick(){
        setAllTaskList((preVal)=>{
            return [...preVal,taskName]
        });
        setTaskName("");
        

    }
    return(
        <div className="container">
            <div className="header">
                <h1 className="headingName">To-Do List</h1>
            </div>
            <div className="form">
                <input type="text" value={taskName} onChange={handleChange}/>
                <button onClick={handleClick}>Add</button>
            </div>
            <div>
                <ul>
                    {allTaskList.map((value)=>{
                        return <TodoList text={value}/>
                    })}
                                                      
                </ul> 
            </div>

        </div>
    )
}
export default TODO;