import { useState } from "react";

const Room = ({ room, isChecked, handleClick }) => {

    return(
        <>
            <input type="radio" name="room" id={room.id} className="booking__form-group--radio__input" checked={isChecked === room.name} onChange={() => handleClick(room.name)}/>
            {
                isChecked === room.name ?
                <img className="booking__form-group--radio__button" src={require("../../../img/checked.png")}/>
                :
                <img className="booking__form-group--radio__button" src={require("../../../img/check.png")}/>
            }
            
            <label htmlFor={room.id} className="booking__form-group--radio__label">
            <span className="booking__form-group--radio-check"></span>
            {room.name}
            </label> 
        </>
    );
}

export default Room;