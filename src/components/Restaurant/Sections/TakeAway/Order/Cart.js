
import { useNavigate } from 'react-router-dom';
import { ACTIONS } from "../../../../../helpers/modifyOrder";

const Cart = ({ order, setShow, show, total, orderDispatch, setDisplayOrder }) => {

    const handleChange = (e, name) => {       
        if(e.target.value > 0) orderDispatch({ type: ACTIONS.CHANGE_COUNT, payload: { name: name, count: e.target.value }});
        else orderDispatch({ type: ACTIONS.DELETE_DISH, payload: { name: name }});
    }

    return (
        <div className="cart">
            <span className="cart--burguer" onClick={() => setShow({...show, cart: !show.cart})}></span>
            <span className="cart--title">Pedido</span>
            {order.map((item) => {
                return (
                <div className="cart__order" key={item.name}>
                    <span className="cart__order--name"><b>{item.name}</b></span>
                    <span className="cart__order--price">{item.price}€</span>
                    <span className="cart__order--sign">x</span>
                    <input type="number" value={item.count} className="cart__order--count" onChange={(e) => handleChange(e, item.name)}/>
                    <span className="cart__order--sign">=</span>
                    <span className="cart__order--priceSum">{(item.price * item.count).toFixed(2)}€</span>
                </div>
                )
            })        
            }
            {
                total > 0 ?
                <>
                <span className="cart__total">Total: {total}€</span>
                <span className="btn--tournament" onClick={() => setDisplayOrder(true)}>Ir a caja</span>
                </>
                :
                <p>No se ha seleccionado ningún plato</p>
            }   
        </div>
    );
}

export default Cart;