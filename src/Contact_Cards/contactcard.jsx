import "./cardStyle.css";
function ContactCard(props){
    return(<div>
        <div className="container">
            <div className="top">
                <p>{props.id}</p>
                <h2 className="name"> {props.name}</h2>
                <img src={props.imgURL} alt="" className="profileImg" />
            </div>
            <div className="bottom">
                <div className="info">{props.phone}</div>
                <div className="info">{props.email}</div>
            </div>
        </div>
    </div>)
}
export default ContactCard;