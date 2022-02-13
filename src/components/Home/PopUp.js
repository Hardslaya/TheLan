import { useCallback, useEffect } from "react";
import PopUpInfo from "./PopUpInfo";

const PopUp = ({ setDisplayPopUp }) => {
    useEffect(() => {
        document.addEventListener("click", handleClickOutside, true);
    }, []);

    const handleClickOutside = useCallback((e) => {
        if(e.target.className === "popUp") setDisplayPopUp(false);
    });

    return (
       <PopUpInfo setDisplayPopUp={setDisplayPopUp}/>      
    );
}

export default PopUp;