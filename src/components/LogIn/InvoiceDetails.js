import axios from "axios";
import { useState } from "react";

const InvoiceDetails = ({ invoice }) => {

    const [ display, setDisplay] = useState("none");

    const handleClick = () => {
        console.log("click")
        /*axios.delete()
        .then(resp => console.log(resp))
        .catch(e => console.log(e))*/
    }

    return (
        <div key={invoice.date} className="login__account__details__order">
            <div className="login__account__details__restaurant">
                <span>Fecha: {invoice.date.slice(0,10)}</span>
                <span>Total: {invoice.total}€</span>
                <div className="login__account__details__restaurant--icons">
                    <div className="login__account__details__restaurant--image"> 
                        <img onClick={() => setDisplay( display === "none" ? "flex" : "none")} src={require("../../img/threeDots.png")}/>
                    </div>
                <img src={require("../../img/delete.png")} className="order__main__item--delete delete" onClick={() => handleClick()}/>
                </div>
            </div>
            <div className="login__account__details__restaurant__order" style={{display: display}}>
                <h2>Detalles del pedido</h2>
                <div className="login__account__details__restaurant__order--itemList">
                    <span className="name"><b>Nombre</b></span>
                    <span className="price"><b>Precio</b></span>
                    <span className="count"><b>Cantidad</b></span>
                </div>
                { 
                    invoice.order.map((item) => {
                        return (
                        <div key={item.name} className="login__account__details__restaurant__order--itemList">
                            <span className="name color">{item.name}</span>
                            <span className="price">{item.price}€</span>
                            <span className="count">{item.count}</span>
                        </div>
                        );
                    })
                }
            </div>
        </div>
    );
}

export default InvoiceDetails;