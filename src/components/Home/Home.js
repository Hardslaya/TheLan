import { useState } from "react";
import Tournament from "./Tournaments/Tournament";
import Booking from "./Booking";
import PopUp from "./PopUp";
import Footer from "./../Footer";


import Navegation from './Header/Navegation';
import Title from './Header/Title';
import Reservation from './Header/Reservation';
import Arrows from './Header/Arrows';

const Home = () => {

    const [ displayPopUp, setDisplayPopUp] = useState(false);

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
        <Booking />
        {displayPopUp && <PopUp setDisplayPopUp={setDisplayPopUp}/>}

        <Footer />
        </>
    );
}

export default Home;