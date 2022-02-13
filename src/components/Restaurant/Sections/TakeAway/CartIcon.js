
const CartIcon = ({ setShow }) => {
    return (
        <span className="burguerCart">
            <img src={require("../../../../img/trayIcon.png")} onClick={() => setShow({menu: true, cart: true})}/>
        </span> 
    );
}

export default CartIcon;