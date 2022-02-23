import { useState ,useEffect } from "react";
import CardItem from "./CardItem";

function Cart(props) {
  const local = JSON.parse(localStorage.getItem('cart'));

  const [count, setCount] = useState(0);

  useEffect(() =>{
    const total = local.map(function(item){
      const price = item.price
      const cant = item.quantity
      return price * cant
    })
    
    let suma =0
    total.map(function (item){
      suma = suma + item
      return suma
      
    })
    //console.log('suma',suma)
    setCount(suma)
  },[local]);



  
  return (
    <div className="shopCart">
      <div className="shopCart-title">
        <p>Cart</p>
        <button className='shopCart-title_close' onClick={() => props.setCarrito(!props.carrito)}>&#215;</button>
      </div>
      
      <div className="shopCart-products">
        {local.map(function (item){
          return (
            <div key={item.ObjectID} className='shopCart-products__card'>
              <CardItem item={item} addCart={props.addCart} delCart={props.delCart}/>
            </div>
          );
        })}
      </div>

      <div className="shopCart-price">
        <span>Total: {count} €</span>
      </div>
    </div>
  );
}
  
export default Cart;