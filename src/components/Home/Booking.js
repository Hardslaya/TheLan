import Dates from "./Booking/Dates";
import Rooms from "./Booking/Rooms";
import { useReducer, useState, useContext } from "react";
import  { useNavigate } from 'react-router-dom'
import axios from "axios";
import { UserContext } from "../../helpers/userContext";

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
            if(action.payload < currentDate || (state.departure && action.payload > state.departure)) return {...state, isArrivalError: true};
            else return {...state, arrival: action.payload, isArrivalError: false};
        case ACTIONS_BOOKING.SET_DEPARTURE:
            if(action.payload < state.arrival) return {...state, isDepartureError: true};
            else return {...state, departure: action.payload, isDepartureError: false};
        case ACTIONS_BOOKING.SET_ROOM:
            return {...state, room: action.payload.name, roomPrice: action.payload.price};
        default:
            return state;
    }
}

const API_ACCOUNT = `http://localhost:3001/accounts/`;

const Booking = ({setDisplayPopUp }) => {

    let navigate = useNavigate();

    const account = useContext(UserContext);

    const [ roomChecked, setRoomChecked ] = useState({name: "White Wolf", price: 50});

    const [ bookingState, bookingDispatch ] = useReducer( bookingReducer, { arrival: "", departure: "", isArrivalError: false, isDepartureError: false, room: roomChecked.name, roomPrice: roomChecked.price});

    const handleClick = (roomName, roomPrice) => {
        console.log(roomPrice)
        setRoomChecked({ name: roomName, price: roomPrice })
        bookingDispatch({ type: ACTIONS_BOOKING.SET_ROOM, payload: { name: roomName, price: roomPrice} })
    }

    const handleChange = (e) => {
        e.target.name === "arrival_date" ? 
            bookingDispatch({ type: ACTIONS_BOOKING.SET_ARRIVAL, payload: e.target.value })
        :
            bookingDispatch({ type: ACTIONS_BOOKING.SET_DEPARTURE, payload: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(account.roomType === "" && bookingState.arrival !== "" && bookingState.departure !== ""){
            axios.put(`${API_ACCOUNT}${account.id}`,{
                ...account,
                arrivalDate: bookingState.arrival,
                departureDate: bookingState.departure,
                roomType: bookingState.room,
                roomPrice: bookingState.roomPrice
            })
            setDisplayPopUp({bool: true, message: "booking"});
        } else alert("No se puede realizar otra reserva");     
    }

    return (
        <section className="section-booking u-margin-bottom-big u-margin-top" >      
            <div className="booking" onSubmit={handleSubmit}>
                <div className="booking__image"></div>
                <form action="." className="booking__form">
                    <Dates handleChange={handleChange} bookingState={bookingState}/>
                    <Rooms handleClick={handleClick} roomChecked={roomChecked}/>
                    {
                        account === null ?
                        <span 
                            value="Reservar" 
                            className="booking__form__input--submit btn__main" 
                            onClick={() => navigate("/LogIn")}>Reservar
                        </span>
                        :
                        <input 
                            type="submit" 
                            value="Reservar" 
                            className="boton" 
                        />
                    }
                </form>
            </div>
        </section>
    );
}

export default Booking;