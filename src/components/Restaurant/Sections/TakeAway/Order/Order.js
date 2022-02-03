import Footer from "../../../../Footer";
import trashCan from "../../../../../img/delete.png";
import { useEffect, useReducer } from "react";
import useSemiPersistentEffect from "../../../../../customHooks/useSemipersistentState";
import axios from 'axios';

const API_ENDPOINT = 'http://localhost:3001/';



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

    const [total, setTotal] = useSemiPersistentEffect('total');

    const [state, dispatch] = useReducer(reducer, JSON.parse(localStorage.getItem('order')));

    useEffect(() => {
        localStorage.setItem('order', JSON.stringify(state));
        if(total <= 0){
            localStorage.clear();
        } 
    }, [state, total]);

    axios.post(`${API_ENDPOINT}prueba/`, {
        "45878": state
        }).then(resp => console.log(resp.data))
        .catch(error => console.log(error))

    function updateTotal(price, count, operation){
        let newTotal = 0;
        if(operation === "delete") newTotal = total - price * count;
        else if(operation === "inc") newTotal = total + price;
        else if(operation === "dec" && count - 1 > 0) newTotal = total - price;
        else return;
        setTotal(newTotal.toFixed(2));        
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

    return (
        <>
        <div className="order">
            <div className="order__image order__image--left"/>
            <div className="order__main">
                <span className="order__main__title">Pedido</span>

                { total > 0 ? 
                    state.map((item) => {                   
                        return (
                            <div className="order__main__item" key={item.name}>
                                <span className="order__main__item--name">{item.name}</span>
                                <span className="order__main__item--price">{item.price}€</span>
                                <span className="order__main__item--sign">x</span>
                                <span className="btn__count btn__count--add" onClick={() => decCount(item.name, item.price, item.count)}>-</span>          
                                <span className="btn__count">{item.count}</span>
                                <span className="btn__count btn__count--add" onClick={() => incCount(item.name, item.price, item.count)}>+</span>
                                <span className="order__main__item--sign">=</span>
                                <span className="order__main__item--priceSum">{item.price * item.count}€</span>
                                <img className="order__main__item--delete" src={trashCan} alt="deleteIcon" onClick={() => deleteItem(item.name, item.price, item.count)}/>
                            </div> 
                        )                
                    }) 
                    : <p>No ha seleccionado ningún plato ni bebida</p> 
                }
                <span className="order__total">Total: {total}€</span> 

            </div>
            <div className="order__image order__image--right"/>
        </div>

        <Footer />
        </>
    );
}

export default Order;