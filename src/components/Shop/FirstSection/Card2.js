import pcfront from "./../../../img/pc-frontal.jpg";
import pcside from "./../../../img/pc-lado.jpg";

function Card1() {
  return (
    <div className="cards-two">
      <div className="cards-two__image">
        <div className="cards-two__image_side">
          <img src={pcside}></img>
        </div>
        <div className="cards-two__image_front">
          <img src={pcfront}></img>
        </div>
      </div>

      <h4>Exceptional Peripherals</h4>
      <p>Los mejores perifericos gaming del momento para juegos de competicion, cuentan con los menores tiempos de respuesta del mercado y una ergonomia certificada. Enfrentate en nuestros torneos y vence.</p>
    </div>
  );
}

export default Card1;