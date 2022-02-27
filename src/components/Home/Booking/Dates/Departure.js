
const Departure = ({ handleChange, bookingState }) => {
    return(
        <div className="booking__form__dates__group">
            <label htmlFor="departure_date" className="booking__formdates__group--label">Fecha de salida: </label>
            <input 
                type="date" 
                name="departure_date" 
                id="departure_date" 
                className="booking__formdates__group--input"
                value={bookingState.isDepartureError ? "" : bookingState.departure} 
                onChange={handleChange}
            />
        </div>
    );
}

export default Departure;