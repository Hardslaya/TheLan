import logo from "./../../../img/logo.png";

function Navegation() {
  return (
    <>
      <nav className="mainheader-navegation">
      <img src={logo} className="mainheader-logo"></img> 
        <li className="mainheader-navegation_menu"><a href="#rooms">Habitaciones</a></li>
        <li className="mainheader-navegation_menu"><a href="#events">Eventos</a></li>                    
        <li className="mainheader-navegation_menu"><a href="#tournaments">Torneos</a></li>
        <li className="mainheader-navegation_menu"><a href="#booking">Reservas</a></li>
      </nav>
    </>
  );
}

export default Navegation;
