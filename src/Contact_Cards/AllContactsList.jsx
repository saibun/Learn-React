import ContactCard from './contactcard';
import contacts from "./contactList";
import "./cardStyle.css";

function contactFn(value,index){
    return(<ContactCard key={index+1} id={index+1} name={value.name} imgURL={value.imgURL} phone={value.phone} email={value.email}/>)

}
function AllContactsList(){
    return(<div>
        <h1 className="heading">My Contact</h1>
        {contacts.map(contactFn)}
        {/* <ContactCard name={contacts[0].name} imgURL={contacts[0].imgURL} phone={contacts[0].phone} email={contacts[0].email} />

        <ContactCard name={contacts[1].name} imgURL={contacts[1].imgURL} phone={contacts[1].phone} email={contacts[1].email} />

        <ContactCard name={contacts[2].name} imgURL={contacts[2].imgURL} phone={contacts[2].phone} email={contacts[2].email} /> */}
    </div>)
}

export default AllContactsList;