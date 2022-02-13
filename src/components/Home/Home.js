import { useState } from "react";
import Tournament from "./Tournaments/Tournament";
import Booking from "./Booking";
import PopUp from "./PopUp";


const Home = () => {

    const [ displayPopUp, setDisplayPopUp] = useState(false);

    return (
        <>
        <div className="section-tournaments">
            <Tournament setDisplayPopUp={setDisplayPopUp}/>
        </div>
        <Booking />
        {displayPopUp && <PopUp setDisplayPopUp={setDisplayPopUp}/>}

        
        </>
    );
}

export default Home;