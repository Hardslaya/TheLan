
const Info = ({ meal, handleClick }) => {
    return (
        <>
            {/*<img src={require(`./../img/}`)} />*/}
            <span className="itemsSelection__course__dish--name">{meal.name}</span>
            <span className="itemsSelection__course__dish--price">{meal.price}</span>
            <a className="btn btn--add" onClick={handleClick}>Añadir</a>                        
        </>
    );
}

export default Info;