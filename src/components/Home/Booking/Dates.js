import Arrival from "./Dates/Arrival";
import Departure from "./Dates/Departure";

const Dates = ({ handleChange }) => {
    return (
        <>
            <p className="u-margin-bottom-small">Selecciona las fechas:</p>
            <Arrival handleChange={handleChange}/>
            <Departure handleChange={handleChange}/>
        </>
    );
}

export default Dates;