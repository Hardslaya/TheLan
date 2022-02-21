import { useContext, useState } from "react";
import Tournament from "./Tournaments/Tournament";
import Booking from "./Booking";
import PopUp from "./PopUp";

const Home = () => {

    const [ displayPopUp, setDisplayPopUp] = useState({ bool: false, message: "" });

    return (
        <>
        <div className="section-tournaments">
            <Tournament setDisplayPopUp={setDisplayPopUp}/>
        </div>
        <Booking setDisplayPopUp={setDisplayPopUp}/>
        {displayPopUp.bool && <PopUp displayPopUp={displayPopUp} setDisplayPopUp={setDisplayPopUp}/>}

        
        </>
    );
}

export default Home;