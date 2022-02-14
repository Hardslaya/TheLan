import { useState } from "react";

import Choice from "./Choice";
import Title from "./Title";
import Offer from "./Offer";
import Popup from "./Popup/Popup";
import Cart from "./Cart/Cart";

function Header(props) {

  const [popup, setPopup] = useState(false);
  const [carrito, setCarrito] = useState(false);

  return (
    <>
      {popup && <Popup popup={popup} setPopup={setPopup} addCart={props.addCart}/>}
      <header className="header">
        <p className="header-T"><b>G</b>aming <b>S</b>hop</p>
        
        {/*<Choice />*/}
        {/*<Slider />*/}

        <Title setPopup={setPopup} setCarrito={setCarrito}/>

        {carrito && <Cart carrito={carrito} setCarrito={setCarrito} addCart={props.addCart} delCart={props.delCart}/>}

        <Offer />
      </header>
    </>
  );
}

export default Header;