
const Info = ({ meal, incCount, decCount, count, number }) => {
    return (
        <>
            {/*<img src={require(`./../img/}`)} />*/}
            <span className="itemsSelection__course__dish--name">{meal.name}</span>
            <span className="itemsSelection__course__dish--price">{meal.price}</span>              
            <span className="btn btn-decrease" onClick={() => decCount(number)}>-</span>
            <span className="itemsSelection__course__dish--quantity">{count}</span>
            <span className="btn btn-increase" onClick={() => incCount(number)}>+</span>
        </>
    );
}

export default Info;