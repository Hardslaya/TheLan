import Button from "./Button";
import Courses from "./Menu/Courses";
import Cart from "./Order/Cart";
import CartIcon from "./CartIcon";
import { useEffect, useReducer, useState } from "react";
import useSemiPersistentEffect from "../../../../customHooks/useSemipersistentState";
import { ACTIONS, orderReducer } from "../../../../helpers/modifyOrder";
import { updateTotal } from "../../../../helpers/updateTotal";

const SectionMenu = ({ menu }) => {

    const [show, setShow] = useState({ menu: false, cart: false });

    const [ total, setTotal ] = useSemiPersistentEffect('total', 0);

    const [order, orderDispatch] = useReducer(orderReducer, JSON.parse(localStorage.getItem('order')) || []);

    useEffect(() => {
        localStorage.setItem('order', JSON.stringify(order));
        setTotal(updateTotal(order));
    }, [order]); 

    const handleClick = (name, price) => {
        order.filter(item => item.name === name).length === 0 ? //Empty array -> Dish not registered previously
        orderDispatch({ type: ACTIONS.ADD_DISH, payload: {name, price}})
        :
        orderDispatch({ type: ACTIONS.INCREMENT, payload: name});      
    }

    if(show.menu) return (
        <>
        {show.cart && 
            <Cart
                order={order}
                setShow={setShow}
                show={show} 
                total={total}
                orderDispatch={orderDispatch}
            />
        || total > 0 && //if the order is not empty, show the cart icon
            <CartIcon setShow={setShow}/>
        }

        <Button setShow={setShow} show={show}/>
        <Courses menu={menu} handleClick={handleClick} setShow={setShow} show={show}/>
        </>
    )
    else return (
        <>
        { total > 0 && 
            <CartIcon setShow={setShow}/> 
        }
        <Button setShow={setShow} show={show}/>
        </>
    );
}

export default SectionMenu;