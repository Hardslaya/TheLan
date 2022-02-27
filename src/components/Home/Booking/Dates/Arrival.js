
const Arrival = ({ handleChange, bookingState }) => {
    return(
        <div className="booking__form-group">
            <label htmlFor="arrival_date" className="booking__form-group__label">Fecha de entrada: </label>
            <input 
                type="date" 
                name="arrival_date" 
                id="arrival_date" 
                className="booking__form-group__input" 
                value={bookingState.isArrivalError ? "" : bookingState.arrival}
                onChange={handleChange}
            />
        </div>
    );
}

export default Arrival;