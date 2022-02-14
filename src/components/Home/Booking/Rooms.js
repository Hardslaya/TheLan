import Room from "./Room";

const rooms = [
    {
        name: "White Wolf",
        id: "one_bed_room"
    }, 
    {
        name: "Pacific Blue",
        id: "two_beds_room"
    }, 
    {
        name: "Green Hell",
        id: "three_beds_room"
    },
    {
        name: "Royal Red",
        id: "one_double_room"
    } 
];

const Rooms = ({ handleClick, isChecked  }) => {

    return (
        <>
        <p className="u-margin-bottom-small">Tipo de habitación:</p>
        <div className="booking__form__rooms u-margin-bottom-small">  
            {rooms.map(room => {
                return (
                <div key={room.name} className="booking__form__rooms__group">
                    <Room room={room} isChecked={isChecked} handleClick={handleClick}/>                     
                </div>
                );
            })}                         
        </div>
        </>
    );
}

export default Rooms;