
const index = 5; 

const Image = (props) => {
    return (
        <div className="sections__meals--image">
            <div className="circle">
                <div className="circle__side circle__side--front">
                    <img src={require(`./../../../../img/${props.meals[index].url}`)} alt="Plato" />
                </div>
                <div className="circle__side circle__side--back">
                    <span>{props.meals[index].name}</span>
                </div>
            </div>
        </div> 
    );
}

export default Image;