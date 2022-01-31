
const info = [{
    heading: "League of legends",
    prize: "Premio: 200€",
    places: "50 plazas",
    price: "10€/participante",
    button: "Registrate"
},
{
    heading: "Fortnite",
    prize: "Premio: 50€",
    places: "100 plazas",
    price: "5€/participante",
    button: "Registrate"
},
{
    heading: "Apex legends",
    prize: "Premio: 100€",
    places: "50 plazas",
    price: "7€/participante",
    button: "Registrate"
},
{
    heading: "Hearthstone",
    prize: "Premio: 150€",
    places: "40 plazas",
    price: "8€/participante",
    button: "Registrate"
}
]

function Card(){
    return (
        <>
        {info.map(function(index){
            return (
                <div className="tournament-ad__info" key={index.heading}>
                    <h3 className="tournament-ad__info--heading">{index.heading}</h3>           
                    <p className="tournament-ad__info--text">{index.prize}</p><hr />
                    <p className="tournament-ad__info--text">{index.places}</p><hr />
                    <p className="tournament-ad__info--text">{index.price}</p>
                    <a className="btn--tournament" href='.'>{index.button}</a>
                </div>
            )
        })}
        </>
    )   
}

export default Card;