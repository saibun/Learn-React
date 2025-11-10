
function Card(props){
    console.log(props);
    return(<div>
        <h2>{props.name}</h2>
        <img src={props.imgLink} alt={props.alt} />
        <p>{props.number}</p>
        <p>{props.email}</p>
    </div>)
}

export default Card;