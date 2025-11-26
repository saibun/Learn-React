import "./clock.css"
import { useState } from "react";

function Clock(){
    const [time,setNow] = useState(new Date().toLocaleTimeString());
    function handleClick(){
        setNow(new Date().toLocaleTimeString());

    }
    setInterval(handleClick,1000);      

    //let date = new Date().toLocaleTimeString();
    return(<div className="container">
        <h1>{time}</h1>
        <button onClick={handleClick}>Get Real time</button>
    </div>)
}
export default Clock;