
const PopUpInfo = ({ dish, setDisplayPopUp }) => {
    return (
        <div className="popUp">
            <div className="popUp__main">
                <span className="popUp__main--close" onClick={() => setDisplayPopUp(false)} />
                <span className="popUp__main--name">{dish.name}</span>
                <div className="popUp__main__imgDiv">
                    <img src={require(`../../../../img/${dish.url}`)} />
                </div>
                <div className="popUp__main__filters">
                {dish.filters.map(filter => {
                    return <img key={filter} className="popUp__main__filters--filter" src={require(`../../../../img/${filter}.png`)}/>
                })}
                </div>
                <p className="popUp__main--desc">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                    Non earum culpa facilis magni iste, quo, assumenda pariatur
                    quos officiis veniam nam adipisci corporis nobis reiciendis 
                    eveniet. Vel consequatur placeat perferendis?
                </p>
            </div>
        </div> 
    );
}

export default PopUpInfo;