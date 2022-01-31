import { useState } from "react"

function Reservation() {
  const [type, setType] = useState({
    arrival: 'text', 
    departure: 'text'

  });


  return (
    <div className="mainheader-reservation">
      <input placeholder="Entrada" type={type.arrival} onFocus={() => setType({arrival:'date', departure:'text'})} onBlur={() => setType('text')} className="mainheader-reservation__date"></input>
      <input placeholder="Salida" type={type.departure} onFocus={() => setType({arrival:'text', departure:'date'})} onBlur={() => setType('text')} className="mainheader-reservation__date"></input>
      <input type="button" className="boton" value="Reservar"></input>
    </div>
  );
}

export default Reservation;