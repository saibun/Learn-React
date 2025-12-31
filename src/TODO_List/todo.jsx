import "./todoStyle.css"
import { useState } from "react";
// import TodoList from "./todoList";
import InputArea from "./inputArea";
import DeleteTodo from "./todoItemDelete";
function TODO(){
    
    const [allTaskList,setAllTaskList]=useState([])
    
    function handleClick(taskName,setTaskName){
        setAllTaskList((preVal)=>{
            return [...preVal,taskName]
        });
        
        

    }
    function deleteItems(pos){
        setAllTaskList((preVal)=>{
            return preVal.filter((items,index)=>{
                return index !==pos;
            })
        })
        

    }
    return(
        <div className="container">
            <div className="header">
                <h1 className="headingName">To-Do List</h1>
            </div>
            <InputArea click={handleClick} />
            <div>
                <ul>
                    {allTaskList.map((value,index)=>{
                        // return <TodoList text={value}/>
                        return <DeleteTodo key={index} id={index} text={value} onCheck={deleteItems}/>
                    })}
                                                      
                </ul> 
            </div>

        </div>
    )
}
export default TODO;