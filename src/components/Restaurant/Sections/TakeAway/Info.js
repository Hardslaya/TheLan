
const Info = ({ meal, incCount, decCount, count }) => {
    return (
        <>
            {/*<img src={require(`./../img/}`)} />*/}
            <span className="itemsSelection__course__dish--name">{meal.name}</span>
            <span className="itemsSelection__course__dish--price">{meal.price}</span>              
            <span className="btn btn-decrease" onClick={() => decCount(meal.objectId)}>-</span>
            <span className="itemsSelection__course__dish--quantity">{count}</span>
            <span className="btn btn-increase" onClick={() => incCount(meal.objectId)}>+</span>
        </>
    );
}

export default Info;