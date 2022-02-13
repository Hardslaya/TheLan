import { useCallback, useEffect, useReducer } from "react";
import { API_ACTIONS, fetchApi, apiReducer } from "../../../../helpers/fetchApi";
import PopUpInfo from "./PopUpInfo";

const API_ENDPOINT = 'http://localhost:3001/filtersList';

const PopUp = ({ dish, setDisplayPopUp }) => {

    const [ stateApi, dispatchApi ] = useReducer( apiReducer, { data: [], isLoading: false, isError: false } );

    useEffect(() => {
        fetchApi(API_ENDPOINT, dispatchApi, API_ACTIONS);
    }, []);

    useEffect(() => {
        document.addEventListener("click", handleClickOutside, true);
    }, []);

    const handleClickOutside = useCallback((e) => {
        if(e.target.className === "popUp") setDisplayPopUp(false);
    });

    return (
       <PopUpInfo dish={dish} setDisplayPopUp={setDisplayPopUp}/>      
    );
}

export default PopUp;