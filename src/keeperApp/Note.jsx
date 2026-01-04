import "../style2.css"
function Note(props){
    return (
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.desc}</p>
            <button className="delete" onClick={()=>{
                props.remove(props.id)
            }} >DELETE</button>
        </div>
    )
}

export default Note;