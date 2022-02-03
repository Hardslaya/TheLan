import Button from "./Button";
import Courses from "./Menu/Courses";
import Cart from "./Order/Cart";
import { useEffect, useReducer, useState } from "react";
import useSemiPersistentEffect from "../../../../customHooks/useSemipersistentState";

const ACTIONS = {
    ADD_DISH: "add_dish",
    ADD_COUNT: "add_count",
}

function reducer(state, action){
    switch (action.type){
        case ACTIONS.ADD_DISH:
            return [...state, { name: action.payload.name, price: action.payload.price, count: 1}];
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

const SectionMenu = ({ menu }) => {

    const [show, setShow] = useState(false);

    const [ total, setTotal ] = useSemiPersistentEffect('total', 0);

    const [ isCartFilled, setIsCartFilled ] = useSemiPersistentEffect("isCartFilled", 1);

    const [state, dispatch] = useReducer(reducer, JSON.parse(localStorage.getItem('order')) || []);

    useEffect(() => {
        localStorage.setItem('order', JSON.stringify(state));
    }, [state]); 

    const handleClick = (name, price) => {
        let isDishNew = true;
        state.filter(item => {
            if(item.name === name) isDishNew = false;
        })
        setIsCartFilled(0);
        isDishNew ? dispatch({ type: ACTIONS.ADD_DISH, payload: {name, price}}) : dispatch({ type: ACTIONS.ADD_COUNT, payload: name});        
    }

    if(show) return (
        <>
        {isCartFilled != 1 && <Cart 
                order={state}
                setShow={setShow} 
                total={total}
                setTotal={setTotal}
            />
        }
                
        <Button setShow={setShow} show={show}/>
        <Courses menu={menu} handleClick={handleClick} />
        </>
    )
    else return (
        <>
        { total > 0 && <span className="burguerCart"><img src={require("../../../../img/iconCart.png")} onClick={() => setShow(true)}/></span> }
        <Button setShow={setShow} show={show}/>
        </>
    );
}

export default SectionMenu;