import Arrival from "./Dates/Arrival";
import Departure from "./Dates/Departure";

const Dates = ({ handleChange, bookingState }) => {
    return (
        <div className="booking__form__dates">
            <p className="u-margin-bottom-small">Selecciona las fechas:</p>
            <Arrival handleChange={handleChange} bookingState={bookingState}/>
            <Departure handleChange={handleChange} bookingState={bookingState}/>
            {(bookingState.isArrivalError || bookingState.isDepartureError) && <span className="error">Seleccione una fecha de salida posterior a la de entrada por favor</span>}
        </div>
    );
}

export default Dates;