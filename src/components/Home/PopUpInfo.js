
const PopUpInfo = ({ displayPopUp, setDisplayPopUp }) => {
    return (
        <div className="popUp">
            <div className="popUp__message">
                <span className="popUp__message--close" onClick={() => setDisplayPopUp({bool: false, message: ""})} />
                {
                    displayPopUp.message === "booking" ?
                        <p>Reserva realizada con éxito!</p>
                    :
                        <p>Registro realizado con éxito!</p>
                }
                
            </div>
        </div>

    );
}

export default PopUpInfo;