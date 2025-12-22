import { useState } from "react";
import "./styleLoginPage.css";
function Event() {
  const [headingText, setHeadingText] = useState("Hello");
  const [isMouseOver, setMouseOver] = useState(false);
  const [name, setName] = useState("");
  function handleSubmit(event) {
    // setHeadingText("Submitted");
    setHeadingText("Hello " + name);
    setName("");
    event.preventDefault()
  }
  function handleMouseOver() {
    setMouseOver(true);
  }
  function handleMouseOut() {
    setMouseOver(false);
  }
  function handleChange(event) {
      setName(event.target.value);
  }

  return (
    <div className="container" >
      <h1>{headingText}</h1>      
      <form action="" onSubmit={handleSubmit}>
        <input 
          onChange={handleChange}         
          type="text"
          placeholder="what's your name?"
          value={name}
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

export default Event;
