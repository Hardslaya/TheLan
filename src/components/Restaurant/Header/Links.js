const list = {
    drinks: ['Vinos', 'Cócteles'],
    hotel: ['Home', 'Pedidos']
}
const Links = () => {
    return (
        <div className="user-nav__links">
            <a href="" className="user-nav__links user-nav__links--link">Carta</a>
            <a href="" className="user-nav__links user-nav__links--link drinks">
                Bebidas
                <ul className="drop-down-menu">
                    {
                        list.drinks.map((item) => {
                            return <li key={item}>{item}</li>
                        })
                    }
                </ul>
            </a>
            <a href="" className="user-nav__links user-nav__links--link hotel">
                Hotel
                <ul className="drop-down-menu">
                    {
                        list.hotel.map((item) => {
                            return <li key={item}>{item}</li>
                        })
                    }
                </ul>
            </a>
        </div>
    );
}

export default Links;