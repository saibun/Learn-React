import "./loginStyle.css";
let loginStatus= true;
function checkLogin(){
    if(loginStatus){
        return <h1>Hello User</h1>;
    }else{
        return <form className="details">
            <input placeholder="Username"/>
            <input placeholder="Password"/>
            <button>Login</button>
        </form> ;

    }
}

function WelcomePage(){
    
    return(<div className="container">
        {checkLogin()}      
        
    </div>)
}

export default WelcomePage;