function CartItem (props) {
  const item = props.item;
  const addCart = props.addCart;
  const delCart = props.delCart;

  return(
    <>
      <img src={item.img}></img>
      <a href='{item.url'>{item.name}</a>
      <p>x{item.quantity}</p>
      <span>{item.price}€</span>
      <div className='mod-cant'>
        <button onClick={()=>addCart(item)}>+</button>
        <button onClick={()=>delCart(item)}>-</button>
      </div>    
    </>
  );
};

export default CartItem;