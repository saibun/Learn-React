import { useState } from "react"
function TodoList(prep){
    const [strike, setStrike] = useState(false)
    function handleClick(){
        setStrike((preVal)=>{
            return !preVal;
        })
    }

    return(
        <li onClick={handleClick} style={{textDecoration: strike?"line-through":"none"}}>{prep.text}</li>        
    )
}
export default TodoList;