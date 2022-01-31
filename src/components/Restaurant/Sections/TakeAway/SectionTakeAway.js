import Button from "./Button";
import Menu from "./Menu/Menu";
import Cart from "./Order/Cart";
import { useEffect, useReducer, useState } from "react";

const ACTIONS = {
    ADD_DISH: "add_dish",
    ADD_COUNT: "add_count",
}

function reducer(state, action){
    switch (action.type){
        case ACTIONS.ADD_DISH:
            return [...state, newDish(action.payload)];
        case ACTIONS.ADD_COUNT:
            return state.map(item => {
                let newCount = item.count + 1;
                if(item.name === action.payload) return {...item, count: newCount};
                return item;
            })
        default:
            return state;
    }
}

function newDish(payload){
    return { name: payload.name, price: payload.price, count: 1};
}

const SectionTakeAway = ({ menu }) => {

    const [state, dispatch] = useReducer(reducer, JSON.parse(localStorage.getItem('order')) || []);

    const [show, setShow] = useState(false);

    const [ isCartFilled, setIsCartFilled ] = useState(localStorage.getItem('isCartFilled') || false);

    function updateCart(){
        localStorage.setItem('order', JSON.stringify(state));
    }

    const handleClick = (name, price) => {
        let isDishNew = true;
        state.filter(item => {
            if(item.name === name) isDishNew = false;
        })
        isDishNew ? dispatch({ type: ACTIONS.ADD_DISH, payload: {name, price}}) : dispatch({ type: ACTIONS.ADD_COUNT, payload: name});
        localStorage.setItem('isCartFilled', true);
        setIsCartFilled(true);
    }
    
    updateCart();

    if(show) return (
        <>
        {isCartFilled &&
            <Cart 
                order={JSON.parse(localStorage.getItem('order'))}
                setShow={setShow} 
                show={show}
            />
        }
                
        <Button setShow={setShow} show={show}/>
        <Menu menu={menu} handleClick={handleClick} />
        </>
    )
    else return (
        <>
        { localStorage.getItem('total') > 0 && <span className="burguerCart"><img src={require("../../../../img/iconCart.png")} onClick={() => setShow(true)}/></span> }
        <Button setShow={setShow} show={show}/>
        </>
    );
}

export default SectionTakeAway;