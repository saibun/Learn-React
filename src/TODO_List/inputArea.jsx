import { useState } from "react";


function InputArea(props){
    const [taskName, setTaskName]= useState("");
    function handleChange(e){
        const value = e.target.value;
        setTaskName(value)
    }
    return(<div className="form">
                <input type="text" value={taskName} onChange={handleChange}/>
                <button onClick={()=>{
                    props.click(taskName);
                    setTaskName("");
                }}>Add</button>
            </div>)
}
export default InputArea;