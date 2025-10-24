import React from "react";
import Heading from "./Heading";
import List from "./List";
import pieValue,{doublePie,trippleValue} from "../pi_doublePi_tripplePi/pi"

function App(){
    return(
        <div>
            <Heading/>
            <List />
            <li>{pieValue}</li>
            <li>{doublePie()}</li>
            <li>{trippleValue()}</li>

        </div>
    )
}

export default App;
