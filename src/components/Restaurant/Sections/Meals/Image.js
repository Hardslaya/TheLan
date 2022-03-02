
import PopUp from "./PopUp";

const Image = ({ menu, dishName, turn, handleClick, setDisplayPopUp, displayPopUp, dishesDisplay }) => {

    /*const dishes = menu.slice(0, menu.length - 1).flat();

    const [ index, setIndex ] = useState(0);

    const [ turn, setTurn ] = useState(false);

    const [ dishName, setDishName ] = useState("");

    const [ displayPopUp, setDisplayPopUp ] = useState(false);

    const [ dishesDisplay, setDishesDisplay ] = useState({ front: dishes[index], back: dishes[index+1]});

    function handleClick(){
        if(turn) setDishName(dishesDisplay.back.name);
        else setDishName(dishesDisplay.front.name);
        setDisplayPopUp(true);
    }*/

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