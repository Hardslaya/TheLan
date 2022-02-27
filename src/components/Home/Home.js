import { useContext, useState } from "react";
import Tournament from "./Tournaments/Tournament";
import Booking from "./Booking";
import PopUp from "./PopUp";
import Footer from "./../Footer";

<<<<<<< HEAD

import Navegation from './Header/Navegation';
import Title from './Header/Title';
import Reservation from './Header/Reservation';
import Arrows from './Header/Arrows';

=======
>>>>>>> alvaro/restaurant
const Home = () => {

    const [ displayPopUp, setDisplayPopUp] = useState({ bool: false, message: "" });

    return (
        <>
        <header className="mainheader">
            <Navegation />
            <Title />
            <Reservation />
            <Arrows />
        </header>
        <div className="section-tournaments">
            <Tournament setDisplayPopUp={setDisplayPopUp}/>
        </div>
<<<<<<< HEAD
        <Booking />
        {displayPopUp && <PopUp setDisplayPopUp={setDisplayPopUp}/>}

        <Footer />
=======
        <Booking setDisplayPopUp={setDisplayPopUp}/>
        {displayPopUp.bool && <PopUp displayPopUp={displayPopUp} setDisplayPopUp={setDisplayPopUp}/>}
                
>>>>>>> alvaro/restaurant
        </>
    );
}

export default Home;