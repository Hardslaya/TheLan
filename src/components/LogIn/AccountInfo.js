const transformDate = (date) => {
    let dateArray = date.split("/");
    return dateArray.reverse().join("/");
}

const datesDifference = (arrivalDate, departureDate) => {    
    const aDate = new Date(transformDate(arrivalDate));
    const dDate = new Date(transformDate(departureDate));
    return Math.ceil(Math.abs(dDate - aDate) / (1000 * 60 * 60 * 24));
}

const AccountInfo = ({ accountState }) => {
    return (
        <>
        <h1>Mi cuenta</h1>
        {accountState.isLoading ?
        <img className="loading" src={require("../../img/loading.gif")}/>
        :
        <>
        <div className="login__account__details__general">
            <p>Datos personales</p>
            <div className="login__account__details__general--inner">
                <span><b>Nombre:</b> {accountState.name}</span>
                <span><b>Email:</b> {accountState.email}</span>
            </div>
        </div>
        <div className="login__account__details__general">         
            <p>Mi habitación</p>
            <div className="login__account__details__general--inner">
            {
                accountState.roomType ?
                <>
                <span><b>Fecha de entrada:</b> {accountState.arrivalDate}</span>
                <span><b>Fecha de salida:</b> {accountState.departureDate}</span>
                <span><b>Estancia:</b> {datesDifference(accountState.arrivalDate, accountState.departureDate)} días</span>
                <span><b>Tipo de habitación:</b> {accountState.roomType}</span>
                <span><b>Número de habitación:</b> {accountState.id}</span>
                <span><b>Total:</b> {accountState.roomPrice*datesDifference(accountState.arrivalDate, accountState.departureDate)}€</span>  
                </>
                :
                <span>No se ha reservado ninguna habitación</span>
            }
            </div>
        </div>
        </>
        }   
        </>
    );
}

export default AccountInfo;