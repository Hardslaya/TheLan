import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

const Cart = ({ order, setShow, total, setTotal }) => {
    
    useEffect(() => {
        addTotal(order);
    }, [order])

    function addTotal(order){
        let newTotal = 0;
        order.map(item =>{
            newTotal = newTotal + (item.price * item.count);
        })
        setTotal(newTotal.toFixed(2));
    }

    return (
        <div className="cart">
            <span className="cart--burguer" onClick={() => setShow(false)}></span>
            <span className="cart--title">Pedido</span>
            {order.map((item) => {
                return (
                <div className="cart__order" key={item.name}>
                    <span className="cart__order--name">{item.name}</span>
                    <span className="cart__order--price">{item.price}€</span>
                    <span className="cart__order--sign">x</span>
                    <span className="cart__order--count">{item.count}</span>
                    <span className="cart__order--sign">=</span>
                    <span className="cart__order--priceSum">{item.price * item.count}€</span>
                </div>
                )
            })        
            }
            <span className="cart__total">Total: {total}€</span>
            <Link to="/Order" >
                <span className="btn--tournament">Ir a caja</span>
            </Link>
        </div>
    );
}

export default Cart;