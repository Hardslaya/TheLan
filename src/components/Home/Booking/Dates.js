import Arrival from "./Dates/Arrival";
import Departure from "./Dates/Departure";

const Dates = ({ handleChange, bookingState }) => {
    return (
        <div className="booking__form__dates">
            <p className="u-margin-bottom-small">Selecciona las fechas:</p>
            <Arrival handleChange={handleChange} bookingState={bookingState}/>
            <Departure handleChange={handleChange} bookingState={bookingState}/>
            { bookingState.isArrivalError && <span className="error">Fecha de entrada no válida</span>}
            { bookingState.isDepartureError && !bookingState.isArrivalError && <span className="error">Fecha de salida no válida</span>}
        </div>
    );
}

export default Dates;