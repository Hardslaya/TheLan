import Dates from "./Booking/Dates";
import Rooms from "./Booking/Rooms";
import { useReducer, useEffect, useState } from "react";
import axios from "axios";

const rooms = ["White Wolf", "Pacific Blue", "Green Hell", "Royal Red"];

let currentDate = new Date();
currentDate = `${currentDate.getFullYear()}-${("0" + (currentDate.getMonth()+1)).slice(-2)}-${currentDate.getDate()}`;

const ACTIONS_BOOKING = {
    SET_ARRIVAL: "set_arrival",
    SET_DEPARTURE: "set_departure",
    SET_ROOM: "set_room",
    BOOKING_SUCCESS: "booking_success",
    BOOKING_ERROR: "booking_error"
}

const bookingReducer = ( state, action ) => {   
    console.log(action.payload < currentDate)
    switch(action.type){
        case ACTIONS_BOOKING.SET_ARRIVAL:
            if(action.payload < currentDate || state.departure && action.payload > state.departure) return {...state, isArrivalError: true};
            else return {...state, arrival: action.payload, isArrivalError: false};
        case ACTIONS_BOOKING.SET_DEPARTURE:
            if(action.payload < state.arrival) return {...state, isDepartureError: true};
            else return {...state, departure: action.payload, isDepartureError: false};
        case ACTIONS_BOOKING.SET_ROOM:
            return {...state, room: action.payload};
        default:
            return state;
    }
}

const user = sessionStorage.getItem("user");

const API_ACCOUNT = `http://localhost:3001/accounts/${user}`;

const Booking = ({setDisplayPopUp }) => {

    const [ account, setAccount] = useState([]);

    useEffect(() => {
        if(user !== null){ 
          axios.get(API_ACCOUNT)
          .then(resp => setAccount(resp.data))
          .catch(e => console.log(e))
        } //FUNCTION
    },[])

    const [ isChecked, setIsChecked ] = useState("White Wolf");

    const [ bookingState, bookingDispatch ] = useReducer( bookingReducer, { arrival: "", departure: "", isArrivalError: false, isDepartureError: false, room: isChecked });

    const handleClick = (roomName) => {
        setIsChecked(roomName)
        bookingDispatch({ type: ACTIONS_BOOKING.SET_ROOM, payload: roomName })
    }

    const handleChange = (e) => {
        console.log(e.target.value)
        e.target.name === "arrival_date" ? 
            bookingDispatch({ type: ACTIONS_BOOKING.SET_ARRIVAL, payload: e.target.value })
        :
            bookingDispatch({ type: ACTIONS_BOOKING.SET_DEPARTURE, payload: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(bookingState.arrival !== "" && bookingState.departure !== "") setDisplayPopUp({bool: true, message: "booking"});
        else alert("Error");     
    }

    console.log(account)

    return (
        <section className="section-booking u-margin-bottom-big u-margin-top" >      
            <div className="booking" onSubmit={handleSubmit}>
                <div className="booking__image"></div>
                <form action="." className="booking__form">
                    <Dates handleChange={handleChange} bookingState={bookingState}/>
                    <Rooms handleClick={handleClick} isChecked={isChecked}/>
                    <input type="submit" value="Reservar" className="booking__form__input--submit btn__main" />
                </form>
            </div>
        </section>
    );
}

export default Booking;