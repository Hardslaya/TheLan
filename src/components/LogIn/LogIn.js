import { useEffect, useState, useReducer, useContext } from "react";
import { apiReducer, API_ACTIONS, fetchApi } from "../../helpers/fetchApi";
import { UserContext } from "../../helpers/userContext";
import Footer from "../Footer";
import Account from "./Account";
import Form from "./Form";
import Register from "./Register";

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

    const account = useContext(UserContext);

    //Identifies current active account
    const [ accountId, setAccountId ] = useState( JSON.parse(sessionStorage.getItem("account")) === null ?  "" : JSON.parse(sessionStorage.getItem("account")).id);

    const [ logInState, logInDispatch ] = useReducer( logInReducer, { isLoggedIn: sessionStorage.getItem("account") && true || false, isCorrect: false, isError: false });

    const [ apiState, dispatchApi ] = useReducer(apiReducer, { data: [], isLoading: true, isError: false });

    const [ details, setDetails ] = useState({ user: "", password: ""});

    const [ register, setRegister ] = useState(false); //shows sign up or log in

    const [ showError, setShowError ] = useState(false); //resets log in credential's error

    useEffect(() => {
        fetchApi(API_ENDPOINT, dispatchApi, API_ACTIONS);   
    }, [register])

    useEffect(() => {
        setDetails({...details, password: ""})
    }, [account.account])

    const submitHandler = e => {
        e.preventDefault();
        if(apiState.data.filter(account => account.name === details.user || account.email === details.user && account.password === details.password).length > 0 && details.password !== ""){           
            setAccountId(apiState.data.filter(account => account.name === details.user || account.email === details.user && account.password === details.password)[0].id);
            logInDispatch({ type: LOGIN_ACTIONS.LOGIN_SUCCESS});
        } else {
            logInDispatch({ type: LOGIN_ACTIONS.LOGIN_ERROR});
            setShowError(true);
        }
    }
    
    return ( 
        <>
        {register ?
            <>
            <div className="login">
                <Register setRegister={setRegister}/>
            </div>
            </>
            :
            <>
            {!logInState.isLoggedIn ?
                <div className="login">
                <Form 
                    details={details} 
                    setDetails={setDetails} 
                    submitHandler={submitHandler} 
                    logInState={logInState}
                    setRegister={setRegister}
                    showError={showError}
                    setShowError={setShowError}
                />
                </div>
            :
                <Account logInDispatch={logInDispatch} LOGIN_ACTIONS={LOGIN_ACTIONS} accountId={accountId} />
            }  
            </>
        }

            <Footer />      
        </>  
    );
}

export default LogIn;