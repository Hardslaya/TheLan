import AccountInfo from "./AccountInfo";
import axios from "axios";
import { useEffect, useState, useReducer, useContext } from "react";
import { UserContext } from "../../helpers/userContext";
import Invoice from "./Invoice";

const navReducer = ( state, action ) => { //active link reducer
    switch(action.type){
        case "account":
            return { account:true, tournaments:false, restaurant: false, shop:false };
        case "tournaments":
            return { account:false, tournaments:true, restaurant: false, shop:false };
        case "restaurant":
            return { account:false, tournaments:false, restaurant: true, shop:false };
        case "shop":
            return { account:false, tournaments:false, restaurant: false, shop:true };
        default:    
            return state;
    }
}

const Account = ({ logInDispatch, LOGIN_ACTIONS, accountId }) => {

    const account = useContext(UserContext);

    const API_ENDPOINT = `http://localhost:3001/accounts/${accountId}`;

    const [ isClicked, isClickedDispatch ] = useReducer( navReducer, { account:true, tournaments:false, restaurant: false, shop:false }); //determines the active link

    const [ invoiceToShow, setInvoiceToShow ] = useState("account"); //determines data to show

    const [ accountState, setAccountState ] = useState({ isLoading: true }); //active account 

    useEffect(() => {
        if(!sessionStorage.getItem("account")){ //timeout for the loading spinner the first time you log in
            let timeout = setTimeout(() => {
                axios.get(API_ENDPOINT)
                .then(resp => {
                    setAccountState({...resp.data, isLoading: false});
                    account.setAccount({...resp.data, isLoading: false});
                    sessionStorage.setItem("account", JSON.stringify(resp.data));
                })
                .catch(error => console.log(error))
            }, 1000);
            return () => clearTimeout(timeout);
        } else { //no fake waiting of api's response
            axios.get(API_ENDPOINT)
                .then(resp => {
                    setAccountState({...resp.data, isLoading: false});
                    account.setAccount({...resp.data, isLoading: false});
                    sessionStorage.setItem("account", JSON.stringify(resp.data));
                })
                .catch(error => console.log(error))
        }
    }, []);

    useEffect(() => {
        account.setAccount(accountState); //updates the current active account when it changes  
    }, [accountState])

    const handleDelete = (id, invoiceType) => { //delete option for invoices
        switch(invoiceType){
            case "tournaments":
                axios.put(API_ENDPOINT, {
                    ...accountState,
                    tournamentsInvoice: accountState.tournamentsInvoice.filter(invoice => invoice.date != id)
                }).then(resp => {
                    setAccountState({...accountState,
                    tournamentsInvoice: accountState.tournamentsInvoice.filter(invoice => invoice.date != id)})
                    })
                .catch($e => console.log($e))
                break;
            case "restaurant":
                axios.put(API_ENDPOINT, {
                    ...accountState,
                    restaurantInvoice: accountState.restaurantInvoice.filter(invoice => invoice.date != id)
                }).then(resp => {
                    setAccountState({...accountState,
                    restaurantInvoice: accountState.restaurantInvoice.filter(invoice => invoice.date != id)})
                })
                }
    }

    const handleClick = (section) => {
        setInvoiceToShow(section)
        isClickedDispatch({ type: section })
    }

    return(
        <div className="login__bg">
            <div className="login__account">
                <div className="login__account__nav">
                    <span className={`${isClicked.account ? "clicked" : ""} login__account__nav--link`} onClick={() => !accountState.isLoading && handleClick("account")}>Mi cuenta</span>
                    <span className={`${isClicked.tournaments ? "clicked" : ""} login__account__nav--link`} onClick={() => !accountState.isLoading && handleClick("tournaments")}>Torneos</span>
                    <span className={`${isClicked.restaurant ? "clicked" : ""} login__account__nav--link`} onClick={() => !accountState.isLoading && handleClick("restaurant")}>Restaurante</span>
                    <span className={`${isClicked.shop ? "clicked" : ""} login__account__nav--link`} onClick={() => !accountState.isLoading && handleClick("shop")}>Tienda</span>
                    <button className="boton login__account__nav--logout" onClick={() => {
                        sessionStorage.clear();
                        account.setAccount(null);
                        logInDispatch({ type: LOGIN_ACTIONS.LOGOUT });
                        }
                    }>Cerrar sesión</button>
                </div>
                <div className="login__account__details">
                    { 
                        invoiceToShow === "account" ?
                        <AccountInfo accountState={accountState}/>
                        :
                        <Invoice invoiceToShow={invoiceToShow} accountState={accountState} handleDelete={handleDelete}/>
                    }                          
                </div>
            </div>
        </div>
    );
}

export default Account;