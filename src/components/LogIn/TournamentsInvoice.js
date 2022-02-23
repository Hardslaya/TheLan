import InvoiceDetails from "./InvoiceDetails";

const TournamentsInvoice = ({ accountState }) => {
    return (
        <>
        <h1>Registro en Torneos</h1>
        {accountState.tournamentsInvoice.length > 0 ?
            accountState.tournamentsInvoice.map((invoice) => {
                return (
                    <InvoiceDetails key={invoice.date} invoice={invoice}/> 
                )
            })
        :
            <p>No hay ninguna factura que mostrar</p>
        }

        </>
    );
}

export default TournamentsInvoice;