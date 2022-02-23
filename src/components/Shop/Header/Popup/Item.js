import cart from "./../../../../img/cart.png"

function Item(props){
    const item = props.item;
    const addCart = props.addCart;

    return(
        <>
          <img className="popup-products__card_image" src={require(`./../../../../img/${item.img}`)}></img>
          <div className="popup-products__card_text">
            <a href={item.url}>{item.name}</a>
            <span className="caract">{item.caract}</span>
            <span className="caract">{item.text}</span>
          </div>
          <span className="popup-products__card_price">{item.price}€</span>
          <img className="popup-products__card_cart" src={cart} onClick={()=>addCart(item)}></img>
        </>
    )
}

export default Item;