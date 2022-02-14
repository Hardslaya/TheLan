import { useCallback, useEffect } from "react";
import PopUpInfo from "./PopUpInfo";

const PopUp = ({ displayPopUp, setDisplayPopUp }) => {
    useEffect(() => {
        document.addEventListener("click", handleClickOutside, true);
    }, []);

    const handleClickOutside = useCallback((e) => {
        if(e.target.className === "popUp") setDisplayPopUp({bool: false, message: ""});
    });

    return (
       <PopUpInfo displayPopUp={displayPopUp} setDisplayPopUp={setDisplayPopUp}/>      
    );
}

export default PopUp;