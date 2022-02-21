import Button from "./Button";
import Courses from "./Menu/Courses";
import Cart from "./Order/Cart";
import CartIcon from "./CartIcon";
import { useState } from "react";
import { ACTIONS } from "../../../../helpers/modifyOrder";

const SectionMenu = ({ menu, order, orderDispatch, setDisplayOrder, total, setTotal }) => {

    const [show, setShow] = useState({ menu: false, cart: false }); 

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
                setDisplayOrder={setDisplayOrder}
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