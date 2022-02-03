
const Dishes = ({ meal, handleClick }) => {
    return (
        <>
            {meal.url != undefined && <div className="itemsSelection__main__course__dish--wrapper"><img className="itemsSelection__main__course__dish--image" src={require(`./../../../../../img/${meal.url}`)} /></div>}           
            <span className="itemsSelection__main__course__dish--name"><i>{meal.name}</i></span>
            <span className="itemsSelection__main__course__dish--price">{meal.price}€</span>
            <a className="btn btn--add" onClick={handleClick}>Añadir</a>                        
        </>
    );
}

export default Dishes;