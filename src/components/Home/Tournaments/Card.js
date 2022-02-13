import { Link } from "react-router-dom";

function Card({ game, handleClick }){  
    return (
        <div className="tournament-ad__info" key={game.name}>
            <h3 className="tournament-ad__info--heading">{game.name}</h3>           
            <p className="tournament-ad__info--text">Premio: {game.prize}€</p><hr />
            <p className="tournament-ad__info--text">{game.places}/plazas</p><hr />
            <p className="tournament-ad__info--text">{game.price}€/participante</p>
            {
                sessionStorage.getItem("user") === null ? 
                <Link to="/LogIn"><button >Registrate</button></Link>
                :
                <button onClick={() => handleClick(game.name, game.price)}>Registrate</button>
            }
            
        </div>
    )   
}

export default Card;