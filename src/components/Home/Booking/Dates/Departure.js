
const Departure = ({ handleChange }) => {
    return(
        <div className="booking__form-group">
            <label htmlFor="departure_date" className="booking__form-group__label">Fecha de salida: </label>
            <input type="date" name="departure_date" id="departure_date" className="booking__form-group__input" onChange={handleChange}/>
        </div>
    );
}

export default Departure;