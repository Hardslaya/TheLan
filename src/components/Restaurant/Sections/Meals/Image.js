
import PopUp from "./PopUp";

const Image = ({ menu, dishName, turn, handleClick, setDisplayPopUp, displayPopUp, dishesDisplay }) => {

    return (
        <>
        {displayPopUp && 
        <PopUp 
            dish={menu.flat()[menu.flat().map(item => item.name).indexOf(dishName)]}
            setDisplayPopUp={setDisplayPopUp}
        />}
        <div className="sections__meals--image">
            <div className="circle" onClick={handleClick}>
                <div className={ turn ? "circle__side circle__side--front circle__turnFront" : "circle__side circle__side--front circle__turnBack" }>
                    <img src={require(`./../../../../img/${dishesDisplay.front.url}`)} alt="Plato" />
                    <span><b>{dishesDisplay.front.name}</b></span>
                </div>
                <div className={ turn ? "circle__side circle__side--back circle__turnBack" : "circle__side circle__side--back circle__turnFront" }>
                    <img src={require(`./../../../../img/${dishesDisplay.back.url}`)} alt="Plato" />
                    <span><b>{dishesDisplay.back.name}</b></span>
                </div>
            </div>
        </div> 
        </>
    );
}

export default Image;