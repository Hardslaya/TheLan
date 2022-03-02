
const PopUpInfo = ({ displayPopUp, setDisplayPopUp }) => {
    return (
        <div className="popUp">
            <div className="popUp__message" >
                <div className="popUp__message--circle" style={displayPopUp.error && {backgroundColor: "red"}}>
                    {
                        displayPopUp.error ?
                        <img src={require("../../img/wrong.png")} />
                        :
                        <img src={require("../../img/checkT.jpg")} />
                    }
                    
                </div>
                {
                    displayPopUp.error ?
                    <>
                    {
                    displayPopUp.message === "booking" ?
                    <>
                        {
                            displayPopUp.invalid ?
                            <p>Error en el formulario</p>
                            :
                            <p>Ya ha realizado una reserva</p>
                        }
                    </> 
                    :
                        <p>Ya se ha registrado en este torneo</p>
                    }
                    <p className="btn--tournament popUp--confirm" onClick={() => setDisplayPopUp({bool: false, message: ""})}>OK</p>
                    </>
                    :
                    <>
                    {
                    displayPopUp.message === "booking" ?
                        <p>Reserva realizada con éxito</p>
                    :
                        <p>Registro realizado con éxito</p>
                    }
                    <p className="btn--tournament popUp--confirm" onClick={() => setDisplayPopUp({bool: false, message: ""})}>OK</p>
                    </>
                }
                
            </div>
        </div>

    );
}

export default PopUpInfo;