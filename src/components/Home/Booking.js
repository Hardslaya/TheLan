import Dates from "./Booking/Dates";
import Rooms from "./Booking/Rooms";

const rooms = ["White Wolf", "Pacific Blue", "Green Hell", "Royal Red"];
const handleChange = () => console.log("hola");
const handleClick = () => console.log("adios");

const Booking = () => {
    return (
        <section className="section-booking u-margin-bottom-big u-margin-top" >      
            <div className="booking">
                <div className="booking__image"></div>
                <form action="." className="booking__form">
                    <Dates handleChange={handleChange}/>
                    <Rooms handleChange={handleClick}/>
                    <input type="submit" value="Buscar" className="booking__form__input--submit btn__main" />
                </form>
            </div>
        </section>
    );
}

export default Booking;