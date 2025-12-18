// CHALLENGE: uncomment the code below and see the car stats rendered
import Cars from "./car";
const [honda, tesla]= Cars;
const {speedStats:{topSpeed: teslaTopSpeed}}= tesla;
const [teslaTopColour]=tesla.coloursByPopularity

const {speedStats:{topSpeed: hondaTopSpeed}}= honda;
const [hondaTopColour]=honda.coloursByPopularity

function Destructure() {
  return (
    <table>
      <tr>
        <th>Brand</th>
        <th>Top Speed</th>
      </tr>
      <tr>
        <td>{tesla.model}</td>
        <td>{teslaTopSpeed}</td>
        <td>{teslaTopColour}</td>
      </tr>
      <tr>
        <td>{honda.model}</td>
        <td>{hondaTopSpeed}</td>
        <td>{hondaTopColour}</td>
      </tr> 
    </table>
  );
}
export default Destructure;
