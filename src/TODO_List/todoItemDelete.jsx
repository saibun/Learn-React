function DeleteTodo(props){
    return(
         <li onClick={()=>{
            props.onCheck(props.id)
         }}>{props.text}</li>   
    )
}

export default DeleteTodo;