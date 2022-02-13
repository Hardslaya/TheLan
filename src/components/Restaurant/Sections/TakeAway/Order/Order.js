import Footer from "../../../../Footer";
import { useEffect, useReducer, useState } from "react";
import useSemiPersistentEffect from "../../../../../customHooks/useSemipersistentState";
import { ACTIONS, orderReducer } from "../../../../../helpers/modifyOrder";
import { updateTotal } from "../../../../../helpers/updateTotal";
import { Link } from "react-router-dom";
import axios from 'axios';
import OrderItem from "./OrderItem";

const API_ENDPOINT = 'http://localhost:3001/accounts/';

const Order = () => {

    const [ account, setAccount ] = useState([]);

    const [ show, setShow ] = useState({ itemInfo:true, orderSuccess: false});

    const [total, setTotal] = useSemiPersistentEffect('total');

    const [order, orderDispatch] = useReducer(orderReducer, JSON.parse(localStorage.getItem('order')));

    useEffect(() => {
        setTotal(updateTotal(order));
        localStorage.setItem('order', JSON.stringify(order));
        if(total <= 0){
            localStorage.removeItem("order");
        } 
    }, [order]);

    useEffect(() => {
        axios.get(`${API_ENDPOINT}${sessionStorage.getItem('user')}`) //Get the account from the login
        .then(resp => setAccount(resp.data))
        .catch(error => console.log(error))
    }, []);

    const postRequest = () => {       
        let date = new Date;
        date = `${date.getDate()}/${("0" + String(date.getMonth() + 1).slice(-2))}/${date.getFullYear()}/${date.getTime()}`;
        axios.put(`${API_ENDPOINT}${account.id}`, {  //Modify the account's details to include the order
            ...account,
            restaurantInvoice: [...account.restaurantInvoice, {order: order, date: date, total: total}],
        })
        .then(resp => {
            localStorage.removeItem("order");
            setTotal(0);
            setShow({ itemInfo: false, orderSuccess: true });           
        })
        .catch(error => console.log(error))
    }

    console.log(total > 0)

    return (
        <>
        <div className="order">
            <div className="order__image order__image--left"/>
                <div className="order__main">
                    <span className="order__main__title">Pedido</span>
                    { show.itemInfo &&
                        total > 0 ? 
                        order.map((item) => {                   
                            return (
                                <OrderItem key={item.name} item={item} orderDispatch={orderDispatch} ACTIONS={ACTIONS}/> 
                            )                
                        }) 
                        :
                        !show.orderSuccess ?  
                        <p>No ha seleccionado ningún plato ni bebida</p> 
                        :
                        <p>Pedido realizado con éxito</p>
                    }

                    {total > 0 && <span className="order__total">Total: {total}€</span>}
                    {!sessionStorage.getItem("user") && total > 0 &&
                        <Link to='/LogIn'>
                            <button disabled={total <= 0 ? true : false}>Hacer pedido</button>
                        </Link>
                    }
                    { sessionStorage.getItem("user") && localStorage.getItem("order") && total > 0 && <button disabled={total <= 0 ? true : false} onClick={() => postRequest()}>Hacer pedido</button> }
                </div>
            <div className="order__image order__image--right"/>
        </div>
        <Footer />
        </>
    );
}

export default Order;