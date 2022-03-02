
const PopUpInfo = ({ displayPopUp, setDisplayPopUp, handleDelete, date, invoiceType, setRegister }) => {
    return (
        <div className="popUp">
            <div className="popUp__message" >
                <div className="popUp__message--circle" style={date && {backgroundColor: "orange"}}>
                    {date ?
                    <img src={require("../../img/delete.png")} style={{width: "4rem"}}/>
                    :
                    <img src={require("../../img/checkT.png")}/>
                    }
                       
                </div>
                {
                    <>
                    {
                        date ?
                        <>
                        <p>Confirme que desea borrar la entrada</p>
                        <div className="popUp--delete">
                            <p className="btn--tournament popUp--confirm yes" onClick={() => {
                                setDisplayPopUp(false);
                                handleDelete(date, invoiceType);
                            }
                            }>SI</p>
                            <p className="btn--tournament popUp--confirm no" onClick={() => setDisplayPopUp(false)}>NO</p>
                        </div>
                        </>
                        :
                        <>
                        <p>Registro exitoso</p>
                        <p className="btn--tournament popUp--confirm " onClick={() => {
                            setDisplayPopUp(false);
                            setRegister(false);
                        }}>OK</p>
                        </>
                    }
                    </>
                }
                
            </div>
        </div>

    );
}

export default PopUpInfo;