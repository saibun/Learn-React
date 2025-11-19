import "./customStyle.css"
import { useState } from "react";

function Count(){
    let [num,setNum] = useState(0);
    
    function increase(){
        setNum(num+1)
        
    }
    function decrease(){
        setNum(num-1)
        
    }


    return(<div className="counter">
        <h1>{num}</h1>
        <button onClick={increase} id="plus">+</button>
        <button onClick={decrease}>-</button>

    </div>)
}
export default Count