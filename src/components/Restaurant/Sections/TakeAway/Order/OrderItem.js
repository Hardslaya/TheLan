
const OrderItem = ({ item, orderDispatch, ACTIONS }) => {
    return (
        <div className="order__main__item" key={item.name}>
            <span className="order__main__item--name">{item.name}</span>
            <span className="order__main__item--price">{item.price}€</span>
            <span className="order__main__item--sign">x</span>
            <span className="btn__count btn__count--add" onClick={() => orderDispatch({ type: ACTIONS.DECREMENT, payload: item.name}) }>-</span>          
            <span className="btn__count">{item.count}</span>
            <span className="btn__count btn__count--add" onClick={() => orderDispatch({ type: ACTIONS.INCREMENT, payload: item.name})}>+</span>
            <span className="order__main__item--sign">=</span>
            <span className="order__main__item--priceSum">{(item.price * item.count).toFixed(2)}€</span>
            <img className="order__main__item--delete" src={require("../../../../../img/delete.png")} alt="deleteIcon" onClick={() => orderDispatch({ type: ACTIONS.DELETE_DISH, payload: { name: item.name}})}/>
        </div>
    );
}

export default OrderItem;