import { useEffect, useState } from "react";
import InvoiceDetails from "./InvoiceDetails";

const Invoice = ({ invoiceToShow, accountState, handleDelete }) => {

    const [ invoiceType, setInvoice ] = useState([]);
    const [ title, setTitle ] = useState("");

    useEffect(() => { //determines data to show depending on the user's input
        switch(invoiceToShow){
            case "tournaments":
                setInvoice(accountState.tournamentsInvoice);
                setTitle("Registro en torneos");
                break;
            case "restaurant":
                setInvoice(accountState.restaurantInvoice);
                setTitle("Pedidos del restaurante");
                break;
            case "shop":
                setInvoice([]);
                setTitle("Pedidos de la tienda");
                break;
        }
    }, [invoiceToShow, accountState])

    return (
        <>
        <h1>{title}</h1>
        {invoiceType.length > 0 ?
            invoiceType.map((invoice) => {
                return (
                    <InvoiceDetails key={invoice.date} invoice={invoice} handleDelete={handleDelete} invoiceType={invoiceToShow}/> 
                )
            })
        :
        <div className="login__account__details__order">
            <p className="none">No hay ninguna factura que mostrar</p>
        </div>
        }

        </>
    );
}

export default Invoice;