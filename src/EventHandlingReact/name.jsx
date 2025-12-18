import { useState } from "react";
import "./styleLoginPage.css";
function Name() {
    const [headingText, setHeadingText] = useState("Hello");
    const [isMouseOver, setMouseOver] = useState(false);
    function handleClick(){
        setHeadingText("Submitted")
    }
    function handleMouseOver(){
        setMouseOver(true)
    }
    function handleMouseOut(){
        setMouseOver(false)
    }

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <div className="formField">
        <input type="text" placeholder="what's your name?" />
        <button style={{backgroundColor: isMouseOver ? "black" : "white"}} onClick={handleClick}  onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}>Submit</button>
      </div>
    </div>
  );
}
export default Name;
