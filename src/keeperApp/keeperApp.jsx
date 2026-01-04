import { useState } from 'react';
import Header from './Header';
import Footer from "./Footer";
import Note from "./Note";
import NoteForm from './noteForm';
function KeeperApp(){
    const [noteList, setNoteList]=useState([]);
    function addNote(newNote){
        setNoteList((pre)=>{
            return [...pre,newNote];
        })
        
    }
    function deleteNote(pos){
        setNoteList((pre)=>{
            return pre.filter((value,index)=> pos!==index)
        })
    }
    
    return (
        <div>
            <Header />
            <NoteForm  onAdd={addNote}/>
            {noteList.map((value, index)=>{
                return <Note title={value.title} desc={value.desc} key={index} id={index} remove={deleteNote}/>
            })}
            
            <Footer />

        </div>
        
    )
}
export default KeeperApp;