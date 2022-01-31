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
            return state.map((item) => {
                if(item.name === action.payload) return {...item, count: item.count + 1};
                return item;
            });
        case ACTIONS.DECREMENT:
            return state.map((item) => {
                if(item.name === action.payload && (item.count - 1) > 0) return {...item, count: item.count - 1};
                return item;
            });
        case ACTIONS.DELETE_DISH:
            return state.filter(item => item.name !== action.payload);
        default:
                return state;
    }
}

const Order = () => {

    const [state, dispatch] = useReducer(reducer, JSON.parse(localStorage.getItem('order')));

    function updateTotal(price, count, operation){
        let newTotal = 0;
        if(operation === "delete") newTotal = localStorage.getItem('total') - price * count;
        else if(operation === "inc") newTotal = Number(localStorage.getItem('total')) + price;
        else if(operation === "dec" && count - 1 > 0) newTotal = Number(localStorage.getItem('total')) - price;
        else newTotal = Number(localStorage.getItem('total'));
        localStorage.setItem('total', newTotal.toFixed(2));
        if(newTotal <= 0) localStorage.setItem('isCartFilled', false);
    }

    function decCount(name, price, count){
        const operation = "dec";
        updateTotal(price, count, operation);
        dispatch({ type: ACTIONS.DECREMENT, payload: name})     
    }
    
    function incCount(name, price, count){
        const operation = "inc";
        updateTotal(price, count, operation);
        dispatch({ type: ACTIONS.INCREMENT, payload: name})
    }

    function deleteItem(name, price, count){
        const operation = "delete";
        updateTotal(price, count, operation);
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
                        <span className="btn__count btn__count--add" onClick={() => decCount(item.name, item.price, item.count)}>-</span>          
                        <span className="btn__count">{item.count}</span>
                        <span className="btn__count btn__count--add" onClick={/*() => console.log(1)*/() => incCount(item.name, item.price, item.count)}>+</span>
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