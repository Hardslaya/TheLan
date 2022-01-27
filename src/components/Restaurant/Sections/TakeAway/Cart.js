import { useReducer, useState } from "react";

const ACTIONS = {
    INCREMENT: "increment",
    DECREMENT: "decrement"
}

const reducer = (state, action) => {
    console.log(state[action.payload])
    switch (action.type){
        case ACTIONS.INCREMENT:
            return state.map((value , index) => {
                if(index === action.payload) return value += 1
                return value
            });
        case ACTIONS.DECREMENT:
            return state.map((value,index) => {
                if(index === action.payload && (value - 1) >= 0) return value -= 1
                return value
            });
    }
}

const Cart = ({ menu, order }) => {

    let initialCountArray = new Array(menu.flat().length).fill(0);

    const [state, dispatch] = useReducer(reducer, initialCountArray);

    function decCount(number){
        dispatch({ type: ACTIONS.DECREMENT, payload: number})
    }
    
    function incCount(number){
        dispatch({ type: ACTIONS.INCREMENT, payload: number})
    }

    console.log(order)

    return (
        <div className="cart">
            <span className="cart--title">Pedido</span>
            {order.map((item) => {
                return (
                <div className="cart__order" key={item.name}>
                    <span className="cart__order--name">{item.name}</span>
                    <span className="cart__order--count">{item.count}</span>
                </div>
                )
            })        
            }
            <a className="btn--more">Ir a caja</a>


            {/*<span className="btn btn-decrease" onClick={() => decCount(meal.objectId)}>-</span>
            <span className="itemsSelection__course__dish--quantity">{count[objectId]}</span>
            <span className="btn btn-increase" onClick={() => incCount(meal.objectId)}>+</span>*/}
        </div>
    );
}

export default Cart;