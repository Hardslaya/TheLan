import InvoiceDetails from "./InvoiceDetails";

const RestaurantInvoice = ({ accountState, handleDelete }) => {
    
    return (
        <>
        <h1>Pedidos del restaurante</h1>
        {accountState.restaurantInvoice.length > 0 ?
            accountState.restaurantInvoice.map((invoice) => {
                return (
                    <InvoiceDetails key={invoice.date} invoice={invoice} handleDelete={handleDelete} invoiceType={"restaurant"}/>
                )
            })
        :
            <p>No hay ninguna factura que mostrar</p>
        }   
        </>
    );
}

export default RestaurantInvoice;