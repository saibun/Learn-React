import "./loginStyle.css";
// import Login from "./login";
// import RegisterPage from "./RegisterPage";
import Form from "./Form";
let loginStatus = false;

//--if not use ternary operator that case use function and condition checking
// function checkLogin() {
//   if (loginStatus) {
//     return <h1>Hello User</h1>;
//   } else {
//     return (<Login />);
//   }
// }

//--- way 1 to add reg page and login page by conditional rendering through ternary operator--
// function WelcomePage() {
//   return <div className="container">{loginStatus?<Login />:<RegisterPage />
//   }</div>;
// }
function WelcomePage() {
  return <div className="container">
    <Form status={loginStatus}/>
  </div>;
}

export default WelcomePage;
