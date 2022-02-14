import mouse from "./../../../img/mouse.png";
import keyboard from "./../../../img/keyboard.png";
import screen from "./../../../img/screen.png";

function Choice() {
  return (
    <div className="header-choice">
      <div className="header-choice__images">
        <p>&lt;</p>
        <div className="header-choice__images_i">
          <img className="mouse" src={mouse}></img>
        </div>
        <div className="header-choice__images_i">
          <img src={keyboard}></img>
        </div>
        <div className="header-choice__images_i">
          <img src={screen}></img>
        </div>
        <p>&gt;</p>
      </div>
      <div className="header-choice__text">
        <p>Rayzen Pro</p>
        <p>Rayzen Max</p>
        <p>Acer RGB</p>
      </div>
    </div>
  );
}

export default Choice;