import Input from "./Input";
function RegisterPage() {
  return (
    <form className="details">
      <Input type="text" placeholder="username" />
      <Input type="password" placeholder="password" />
      <Input type="password" placeholder="confirm password" />
      <button>Register</button>
    </form>
  );
}
export default RegisterPage;
