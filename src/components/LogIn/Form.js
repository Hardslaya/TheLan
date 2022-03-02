import { useState } from "react";

const Form = ({ details, setDetails, submitHandler, logInState, setRegister, showError, setShowError }) => {

    return (
        <div className="login__wrapper">
            <div className="login__main">
                <p className="login__main__title">Log In</p>
                {!logInState.IsCorrect && 
                    <form className="login__main__form" onSubmit={submitHandler}>
                        {logInState.isError && showError && <p className="login__main__form--error">Credenciales incorrectas</p>}
                        <span className="login__main__form--group">
                            <label htmlFor="room" className="login__main__form--label">Usuario/email</label>
                            <input id="room" name="room" type="text" className="login__main__form--text" onChange={(e) => setDetails({...details, user: e.target.value})} value={details.user}/>
                        </span>
                        <span className="login__main__form--group">
                            <label htmlFor="password" className="login__main__form--label">Contraseña</label>
                            <input id="password" name="password" type="password" className="login__main__form--text" onChange={(e) => setDetails({...details, password: e.target.value})}/>
                        </span>
                        <input name="send" type="submit" value="Enviar" className="login__main__form--submit"/>
                        <p class="login__main--switch" onClick={() =>{
                            setRegister(true);
                            setShowError(false);
                        }}>¿Todavía no tienes cuenta? <b>Registrate</b></p>
                    </form>
                }
            </div>
        </div>
    );
}

export default Form;