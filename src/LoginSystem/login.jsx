import Input from "./Input";
function Login() {
  return (
    
      <form className="details">
        <Input type="text" placeholder="username"/>
        <Input type="password" placeholder="password"/>
        <button>Login</button>
      </form>
    
  );
}

export default Login;
