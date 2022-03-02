
import { apiReducer, API_ACTIONS, fetchApi } from "../../helpers/fetchApi";
import { useEffect, useReducer, useState } from "react";
import axios from "axios";
import PopUpInfo from "./PopUpInfo";

const Register = ({setRegister}) => {

    const API_ENDPOINT = 'http://localhost:3001/accounts';

    useEffect(() => {  
        fetchApi(API_ENDPOINT, dispatch, API_ACTIONS);    
    }, []);

    const [ state, dispatch ] = useReducer( apiReducer, { data: [],  isLoading: false , isError: false,} );

    const [ newAccount, setNewAccount ] = useState({ email: "", password: "", password2: "", name: ""});

    const [ isError, setIsError ] = useState(false);

    const [ displayPopUp, setDisplayPopUp ] = useState(false);

    const submitHandler = (e) => {
        e.preventDefault();
        if(newAccount.password === newAccount.password2){ //checks that the passwords are the same
            axios.post(API_ENDPOINT, {
                id: "335",
                roomType: "",
                roomPrice: 0,
                name: newAccount.name,
                email: newAccount.email,
                password: newAccount.password,
                arrivalDate: "",
                departureDate: "",
                tournamentsInvoice: [],
                restaurantInvoice: []
            }).then(resp => {
                setIsError(false);
                setDisplayPopUp(true);
            })
            .catch(e => console.log(e))
        } else setIsError(true); //shows error message
    }

    return (
        <>
        <div className="login__wrapper">
            <div className="login__main">
                <p className="login__main__title">Sign Up</p>
                
                <form className="login__main__form" onSubmit={submitHandler}>
                {isError && <p className="login__main__form--error" style={{top: "70%"}}>Las contraseñas no coinciden</p>}
                    <span className="login__main__form--group">
                        <label htmlFor="email" className="login__main__form--label">Usuario/email</label>
                        <input id="email" name="email" type="email" className="login__main__form--text" onChange={(e) => setNewAccount({...newAccount, email: e.target.value})} value={newAccount.email} required/>
                    </span>
                    <span className="login__main__form--group">
                        <label htmlFor="name" className="login__main__form--label">Nombre</label>
                        <input id="name" name="name" type="text" className="login__main__form--text" onChange={(e) => setNewAccount({...newAccount, name: e.target.value})} value={newAccount.name} required/>
                    </span>
                    <span className="login__main__form--group">
                        <label htmlFor="password1" className="login__main__form--label">Contraseña</label>
                        <input id="password1" name="password" type="password" className="login__main__form--text" onChange={(e) => setNewAccount({...newAccount, password: e.target.value})} value={newAccount.password} required/>
                    </span>
                    <span className="login__main__form--group">
                        <label htmlFor="password2" className="login__main__form--label">Confirme contraseña</label>
                        <input id="password2" name="password" type="password" className="login__main__form--text" onChange={(e) => setNewAccount({...newAccount, password2: e.target.value})} value={newAccount.password2} required/>
                    </span>
                    <input name="send" type="submit" value="Enviar" className="login__main__form--submit"/>
                    <p class="login__main--switch" onClick={() => setRegister(false)}>¿Y tienes cuenta con nosotros? <b>Log in</b></p>
                </form>
            </div>
        </div>
        {displayPopUp && <PopUpInfo displayPopUp={displayPopUp} setDisplayPopUp={setDisplayPopUp} setRegister={setRegister}/>}
        </>
    );
}

export default Register;