
const PopUpInfo = ({ setDisplayPopUp }) => {
    return (
        <div className="popUp">
            <div className="popUp__message">
                <span className="popUp__message--close" onClick={() => setDisplayPopUp(false)} />
                <p>Registro realizado con éxito!</p>
            </div>
        </div>

    );
}

export default PopUpInfo;