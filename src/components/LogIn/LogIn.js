import { useEffect, useState, useReducer } from "react";
import { apiReducer, API_ACTIONS, fetchApi } from "../../helpers/fetchApi";
import Account from "./Account";
import Form from "./Form";

const API_ENDPOINT = 'http://localhost:3001/accounts';

const LOGIN_ACTIONS = {
    LOGIN_SUCCESS: "login_success",
    LOGIN_ERROR: "login_error",
    LOGOUT: "logout"
}

function logInReducer( state, action ){
    switch(action.type){
        case LOGIN_ACTIONS.LOGIN_SUCCESS:
            return { ...state,  isLoggedIn: true, isCorrect: true };
        case LOGIN_ACTIONS.LOGIN_ERROR:
            return { ...state, isError: true }
        case LOGIN_ACTIONS.LOGOUT:
            return { isLoggedIn: false, isCorrect: false, isError: false }
        default:
            return state;
    }
};

const LogIn = () => {

    useEffect(() => {
        fetchApi(API_ENDPOINT, dispatchApi, API_ACTIONS);
    }, [])

    const [ logInState, logInDispatch ] = useReducer( logInReducer, { isLoggedIn: sessionStorage.getItem("user") && true || false, isCorrect: false, isError: false });

    const [ apiState, dispatchApi ] = useReducer(apiReducer, { data: [], isLoading: true, isError: false });

    const [ details, setDetails ] = useState({ user: "", password: ""});

    const submitHandler = e => {
        e.preventDefault();
        if(apiState.data.filter(account => account.name === details.user || account.email === details.user && account.password === details.password).length > 0){           
            let account = apiState.data.filter(account => account.name === details.user || account.email === details.user && account.password === details.password)[0].id;
            logInDispatch({ type: LOGIN_ACTIONS.LOGIN_SUCCESS});
            sessionStorage.setItem("user", account);
        } else logInDispatch({ type: LOGIN_ACTIONS.LOGIN_ERROR})
    }

    return ( 
        <>
            {!logInState.isLoggedIn ?
                <div className="login">
                <Form 
                    details={details} 
                    setDetails={setDetails} 
                    submitHandler={submitHandler} 
                    logInState={logInState}
                />
                </div>
            :
                <Account logInDispatch={logInDispatch} LOGIN_ACTIONS={LOGIN_ACTIONS}/>
            }        
        </>  
    );
}

export default LogIn;