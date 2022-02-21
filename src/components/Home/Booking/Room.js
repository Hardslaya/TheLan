
const Room = ({ room, roomChecked, handleClick }) => {

    return(
        <>
            <input type="radio" name="room" id={room.id} className="booking__form__rooms--radio__input" checked={roomChecked.name === room.name} onChange={() => handleClick(room.name, room.price)}/>
            {
                roomChecked.name === room.name ?
                <img className="booking__form__rooms--radio__button" src={require("../../../img/checked.png")}/>
                :
                <img className="booking__form__rooms--radio__button" src={require("../../../img/check.png")}/>
            }
            
            <label htmlFor={room.id} className="booking__form__rooms--radio__label">
            <span className="booking__form__rooms--radio-check"></span>
            {room.name}
            </label> 
        </>
    );
}

export default Room;