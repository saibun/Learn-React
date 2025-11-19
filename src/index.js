import React from 'react';
import ReactDOM from 'react-dom/client';
// import Greetings from './Greetings';
// import App from './react_componant/App';
// import Header from './keeperApp/Header';
// import Footer from "./keeperApp/Footer";
// import Note from "./keeperApp/Note";
// import Contact from './cards/Contact';
//import AllContactsList from './Contact_Cards/AllContactsList';
//import WelcomePage from './LoginSystem/WelcomePage';
import Count from './count_increase_decrease/count';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Greetings />
    <App /> */}
    {/* <Header />
    <Note />
    <Footer /> */}
    {/* <Contact/> */}
    {/* <AllContactsList /> */}
    {/* <WelcomePage /> */}
    <Count/>
  



    
  </React.StrictMode>
);


