import mouse from "./../../../img/mouse.png";

function Card1() {
  return (
    <div className="cards-one">
    	<div className="cards-one__image">
        <p>Peripherals</p>
        <div className="cards-one__image_im">
          <img src={mouse}></img>
        </div>
        <div className="cards-one__image_txt">
          <h4>Wolf Pack</h4>
            <span>Mira los perifericos que mejor se adaptan a ti</span>
            <a href="#">View &#8594;</a>
        </div>
      </div>

      <h4>Exceptional Peripherals</h4>
      <p>Los mejores perifericos gaming del momento para juegos de competicion, cuentan con los menores tiempos de respuesta del mercado y una ergonomia certificada. Enfrentate en nuestros torneos y vence.</p>
    </div>
    );
}

export default Card1;