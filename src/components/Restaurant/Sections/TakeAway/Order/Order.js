import Footer from "../../../../Footer";
import { useContext, useEffect, useState } from "react";
import { ACTIONS } from "../../../../../helpers/modifyOrder";
import { Link } from "react-router-dom";
import axios from 'axios';
import OrderItem from "./OrderItem";
import { UserContext } from "../../../../../helpers/userContext";

const API_ENDPOINT = 'http://localhost:3001/accounts/';

const Order = ({ order, orderDispatch, setDisplayOrder, total, setTotal }) => {

    const account = useContext(UserContext);

    const [ show, setShow ] = useState({ itemInfo:true, orderSuccess: false});

    useEffect(() => {
        if(total <= 0){ //when all items are removed from the order
            localStorage.removeItem("order");
        } 
    }, [order]);

    const postRequest = () => {       
        let date = new Date;
        date = `${date.getDate()}/${("0" + String(date.getMonth() + 1).slice(-2))}/${date.getFullYear()}/${date.getTime()}`;
        axios.put(`${API_ENDPOINT}${account.id}`, {  //Modify the account's details to include the order
            ...account,
            restaurantInvoice: [...account.restaurantInvoice, {order: order, date: date, total: total}],
        })
        .then(resp => {
            localStorage.removeItem("order");
            setTotal(0); //order finished and removed from view 
            setShow({ itemInfo: false, orderSuccess: true });         
        })
        .catch(error => console.log(error))
    }

    return (
        <>
        <div className="order">
            <div className="order__image order__image--left"/>
                <div className="order__main">
                    <span className="order__main__back" onClick={() => setDisplayOrder(false)}>Volver</span>
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
                    {!account && total > 0 &&
                        <Link to='/LogIn'>
                            <button disabled={total <= 0 ? true : false}>Hacer pedido</button>
                        </Link>
                    }
                    { account && localStorage.getItem("order") && total > 0 && <button disabled={total <= 0 ? true : false} onClick={() => postRequest()}>Hacer pedido</button> }
                </div>
            <div className="order__image order__image--right"/>
        </div>
        <Footer />
        </>
    );
}

export default Order;