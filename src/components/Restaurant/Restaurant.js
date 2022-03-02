
import Hero from "./Hero.js";
import Sections from "./Sections/Sections";
import Footer from "../Footer";
import Order from "./Sections/TakeAway/Order/Order";
import { useState, useReducer, useEffect } from "react";
import { orderReducer } from "../../helpers/modifyOrder";
import useSemiPersistentEffect from "../../customHooks/useSemipersistentState";
import { updateTotal } from "../../helpers/updateTotal";
import { OrderContext } from "../../helpers/orderContext.js";

const Restaurant = () => {

  const [order, orderDispatch] = useReducer(orderReducer, JSON.parse(localStorage.getItem('order')) || []); //keeps the cart in the localStorage

  const [ total, setTotal ] = useSemiPersistentEffect('total', 0);

  const [ displayOrder, setDisplayOrder ] = useState(false);

  useEffect(() => { //updates the cart and total when the order is modified
    localStorage.setItem('order', JSON.stringify(order));
    setTotal(updateTotal(order));
  }, [order]);

  return (
    <>
      {
        displayOrder ? //displays the order info or the main page with the menu
          <Order 
            order={order} 
            orderDispatch={orderDispatch} 
            setDisplayOrder={setDisplayOrder}
            total={total}
            setTotal={setTotal}
          />
          :
          <>
          <Hero />
          <OrderContext.Provider value={setDisplayOrder}>
            <Sections 
              order={order} 
              orderDispatch={orderDispatch} 
              setDisplayOrder={setDisplayOrder}
              total={total}
              setTotal={setTotal}
            />
          </OrderContext.Provider>
          <Footer />
          </>
      }   
    </>
  );
}

export default Restaurant;
