function Reservation() {
  return (
    <div className="mainheader-reservation">
      <input placeholder="Entrada" type="text" onfocus="(this.type='date')" className="mainheader-reservation__date"></input>
      <input placeholder="Salida" type="text" onfocus="(this.type='date')" className="mainheader-reservation__date"></input>
      <input type="button" className="boton" value="Reservar"></input>
    </div>
  );
}

export default Reservation;
