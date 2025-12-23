import "./styleLoginPage.css";
import { useState } from "react";
function FullName() {
  const [headingText, setHeadingText] = useState("Hello");
  const [isMouseOver, setMouseOver] = useState(false);
  const [fullName, setFullName] = useState({
    fName:"",
    lName:""
  });
  function handleChange(event) {
    const {name,value}=event.target
    setFullName({
      ...fullName,
      [name]:value,
    })
    
    
  }
  
  function handleSubmit(event) {
    setHeadingText("Hello "+fullName.fName+" "+fullName.lName);
    setFullName({
      fName:"",
      lName:"",
    })
    event.preventDefault();
  }
  function handleMouseOver() {
    setMouseOver(true);
  }
  function handleMouseOut() {
    setMouseOver(false);
  }

  return (
    <div className="container" onSubmit={handleSubmit}>
      <h1>{headingText}</h1>
      <form action="" >
        <input
          name="fName"
          value={fullName.fName}
          onChange={handleChange}
          type="text"
          placeholder="what's your name?"
          
        />
        <input
          name="lName"
          value={fullName.lName}
          onChange={handleChange}
          type="text"
          placeholder="what is your title"
          
          
        />
        <button
          style={{ backgroundColor: isMouseOver ? "black" : "white" }}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
export default FullName;
