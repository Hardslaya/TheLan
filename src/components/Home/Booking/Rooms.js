import Room from "./Room";

const rooms = [
    {
        name: "White Wolf",
        id: "one_bed_room",
        price: 50
    }, 
    {
        name: "Pacific Blue",
        id: "two_beds_room",
        price: 70
    }, 
    {
        name: "Green Hell",
        id: "three_beds_room",
        price: 90
    },
    {
        name: "Royal Red",
        id: "one_double_room",
        price: 80
    } 
];

const Rooms = ({ handleClick, roomChecked  }) => {

    return (
        <>
        <p className="u-margin-bottom-small">Tipo de habitación:</p>
        <div className="booking__form__rooms u-margin-bottom-small">  
            {rooms.map(room => {
                return (
                <div key={room.name} className="booking__form__rooms__group">
                    <Room room={room} roomChecked={roomChecked} handleClick={handleClick}/>                     
                </div>
                );
            })}                         
        </div>
        </>
    );
}

export default Rooms;