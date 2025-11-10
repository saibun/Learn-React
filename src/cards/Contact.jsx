import Card from "./card";

function Contact(){
    return(<div>
        <h1>My Contacts</h1>
        <Card name="Beyonce" imgLink="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg" alt="avatar_img" number=" +123 456 789" email="b@beyonce.com"/>
        <Card name="Jack Bauer" imgLink="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg" alt="avatar_img" number=" +123 456 789" email="jack@nowhere.com"/>
    </div>)
}

export default Contact;