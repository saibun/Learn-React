let greet=" ";
let greet_time = new Date();
let customeStyle={
  fontSize:"50px",
  fontWeight: "bold",
  border: "1px solid black",
  borderRadius: "5px",
  
}
 greet_time.setHours(16);
// console.log(greet_time.getHours());
if(greet_time.getHours() < 12){
  greet="Good Morning";
  customeStyle.color="green";
}else if(greet_time.getHours() < 18){
  greet="Good Afternoon";
  customeStyle.color="blue";
}else{
  greet="Good Night";
  customeStyle.color="red"
}


function Greetings() {
  return (<div style={customeStyle}>{greet}</div>);
}

export default Greetings;
