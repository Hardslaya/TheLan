import AccountInfo from "./AccountInfo";
import RestaurantInvoice from "./RestaurantInvoice";
import TournamentsInvoice from "./TournamentsInvoice";
import axios from "axios";
import { useEffect, useState, useReducer, useContext } from "react";
import { UserContext } from "../../helpers/userContext";

const componentToShow = (invoiceToShow, accountState, handleDelete) => {
    switch (invoiceToShow){
        case "tournaments":
            return <TournamentsInvoice accountState={accountState} handleDelete={handleDelete}/>;
        case "restaurant":
            return <RestaurantInvoice accountState={accountState} handleDelete={handleDelete} invoiceType={"tournaments"}/>;
        case "shop":
            return <p>Tienda</p>;
        case "account":
            return <AccountInfo accountState={accountState}/>
    }
}

const navReducer = ( state, action ) => {
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

    const setAccount = useContext(UserContext);

    const API_ENDPOINT = `http://localhost:3001/accounts/${accountId}`;

    const [ isClicked, isClickedDispatch ] = useReducer( navReducer, { account:true, tournaments:false, restaurant: false, shop:false });

    const [ invoiceToShow, setInvoiceToShow ] = useState("account");

    const [ accountState, setAccountState ] = useState({ isLoading: true });

    useEffect(() => {
        let timeout = setTimeout(() => {
            axios.get(API_ENDPOINT)
            .then(resp => {
                setAccountState({...resp.data, isLoading: false});
                setAccount({...resp.data, isLoading: false});
                sessionStorage.setItem("account", JSON.stringify(resp.data));
            })
            .catch(error => console.log(error))
        }, 1000);
        return () => clearTimeout(timeout);
    }, []);

    const handleDelete = (id, invoiceType) => {
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
                    <span className={`${isClicked.account ? "clicked" : ""} login__account__nav--link`} onClick={() => handleClick("account")}>Mi cuenta</span>
                    <span className={`${isClicked.tournaments ? "clicked" : ""} login__account__nav--link`} onClick={() => handleClick("tournaments")}>Torneos</span>
                    <span className={`${isClicked.restaurant ? "clicked" : ""} login__account__nav--link`} onClick={() => handleClick("restaurant")}>Restaurante</span>
                    <span className={`${isClicked.shop ? "clicked" : ""} login__account__nav--link`} onClick={() => handleClick("shop")}>Tienda</span>
                    <span className="login__account__nav--total" >Total: </span>
                    <button className="login__account__nav--logout" onClick={() => {
                        sessionStorage.clear();
                        setAccount(null);
                        logInDispatch({ type: LOGIN_ACTIONS.LOGOUT });
                        }
                    }>Cerrar sesión</button>
                </div>
                <div className="login__account__details">
                    { componentToShow(invoiceToShow, accountState, handleDelete) }                          
                </div>
            </div>
        </div>
    );
}

export default Account;