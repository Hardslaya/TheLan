import Button from "./Button";
import Menu from "./Menu";
import Cart from "./Cart";
import { useReducer, useState } from "react";

let isOrderReady = false;

const ACTIONS = {
    ADD_DISH: "add_dish",
    ADD_COUNT: "add_count"
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
            console.log(state);
    }
}

function newDish(name){
    return { name: name, count: 1};
}

const SectionTakeAway = ({ menu }) => {

    const [state, dispatch] = useReducer(reducer, []);

    const [show, setShow] = useState(false);

    const handleClick = (dish) => {
        let bool = true;
        state.map(item => {
            console.log(item.name === dish)
            if(item.name === dish) bool = false;
        })
        isOrderReady = true;
        bool ? dispatch({ type: ACTIONS.ADD_DISH, payload: dish}) : dispatch({ type: ACTIONS.ADD_COUNT, payload: dish});
    }

    if(show) return (
        <>
        { isOrderReady && <Cart menu={menu} order={state}/> }
        
        <Button setShow={setShow} show={show}/>
        <Menu menu={menu} handleClick={handleClick}/>
        </>
    )
    else return (
        <>
        <Button setShow={setShow} show={show}/>
        </>
    );
}

export default SectionTakeAway;