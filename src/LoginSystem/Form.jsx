import Input from "./Input";
function Form(props) {
  return (
    <form className="details">
      <Input type="text" placeholder="username" />
      <Input type="password" placeholder="password" />
      {!props.status && (<Input type="password" placeholder="confirm password" />)}
      
      <button>{props.status ? "Login":"Register"}</button>
    </form>
  ); 
}
export default Form;
