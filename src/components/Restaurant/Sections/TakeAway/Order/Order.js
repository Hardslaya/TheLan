import Footer from "../../../../Footer";
import trashCan from "../../../../../img/delete.png";
import { useReducer } from "react";

const ACTIONS = {
    INCREMENT: "increment",
    DECREMENT: "decrement",
    DELETE_DISH: "delete"
}

const reducer = (state, action) => {
    switch (action.type){
        case ACTIONS.INCREMENT:
            return state.map((value , index) => {
                if(index === action.payload) return value += 1;
                return value;
            });
        case ACTIONS.DECREMENT:
            return state.map((value,index) => {
                if(index === action.payload && (value - 1) >= 0) return value -= 1;
                return value;
            });
        case ACTIONS.DELETE_DISH:
            return state.filter(item => item.name !== action.payload)
            default:
                return state;
    }
}
                {/*<span className="btn btn-decrease" onClick={() => decCount(meal.objectId)}>-</span>
            <span className="itemsSelection__course__dish--quantity">{count[objectId]}</span>
            <span className="btn btn-increase" onClick={() => incCount(meal.objectId)}>+</span>*/}

const Order = () => {

    const [state, dispatch] = useReducer(reducer, JSON.parse(localStorage.getItem('order')));

    function decCount(number){
        dispatch({ type: ACTIONS.DECREMENT, payload: number})
    }
    
    function incCount(number){
        dispatch({ type: ACTIONS.INCREMENT, payload: number})
    }

    function deleteItem(name, price, count){
        const newTotal = localStorage.getItem('total') - price * count;
        localStorage.setItem('total', newTotal.toFixed(2));
        if(newTotal <= 0) localStorage.setItem('isCartFilled', false);
        dispatch({ type: ACTIONS.DELETE_DISH, payload: name});
    }

    function updateOrder(){
        localStorage.setItem('order', JSON.stringify(state));
    }

    updateOrder()

    return (
        <>
        <div className="order">
            <div className="order__image order__image--left"/>
            <div className="order__main">
                <span className="order__main__title">Pedido</span>

                { localStorage.getItem("total") > 0 ? state.map((item) => {
                    return (
                    <div className="order__main__item" key={item.name}>
                        <span className="order__main__item--name">{item.name}</span>
                        <span className="order__main__item--price">{item.price}€</span>
                        <span className="order__main__item--sign">x</span>
                        <span className="btn__count btn__count--add" onClick={() => console.log(1)/*() => decCount(meal.objectId)*/}>-</span>          
                        <span className="btn__count">{item.count}</span>
                        <span className="btn__count btn__count--add" onClick={() => console.log(1)/*() => incCount(meal.objectId)*/}>+</span>
                        <span className="order__main__item--sign">=</span>
                        <span className="order__main__item--priceSum">{item.price * item.count}€</span>
                        <img className="order__main__item--delete" src={trashCan} alt="deleteIcon" onClick={() => deleteItem(item.name, item.price, item.count)}/>
                    </div> 
                    )                
                }) 
                : <p>No ha seleccionado ningún plato ni bebida</p>      
                }
                <span className="order__total">Total: {localStorage.getItem('total')}€</span>

            </div>
            <div className="order__image order__image--right"/>
        </div>

        <Footer />
        </>
    );
}

export default Order;