import { useState } from "react";
function NoteForm(props) {
  const [noteInput, setNote] = useState({
    title:"",
    desc:"",
  })
  
  function handleChange(e){
    const{name,value}=e.target;
    setNote((preValue)=>{
      if(name === "title"){
        return {
          title:value,
          desc:preValue.desc,
        }
      }else if(name === "desc"){
        return{
          title:preValue.title,
          desc:value,
        }
      }

    })
    e.preventDefault()

  }

  function submitNote(e){
    e.preventDefault();
    props.onAdd(noteInput)
      
    
  }
  
  return (
    <div>
      <form className="title-notes">
        <input type="text" placeholder="Title" name="title" className="title"  onChange={handleChange} value={noteInput.title}/>
        <textarea name="desc" id="" placeholder="Take a note" className="take-note" rows={3}  onChange={handleChange}  value={noteInput.desc}></textarea>
        <button className="add" onClick={submitNote} >Add</button>
      </form>
    </div>
  );
}
export default NoteForm;
