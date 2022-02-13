import { useEffect, useState, useRef } from "react";
import PopUp from "./PopUp";

const Image = ({ menu }) => {

    const dishes = menu.slice(0, menu.length - 1).flat();

    const [ index, setIndex ] = useState(0);

    const [ turn, setTurn ] = useState(false);

    const [ dishName, setDishName ] = useState("");

    const [ displayPopUp, setDisplayPopUp ] = useState(false);

    const [ dishesDisplay, setDishesDisplay ] = useState({ front: dishes[index], back: dishes[index+1]});

    function handleClick(){
        if(turn) setDishName(dishesDisplay.back.name);
        else setDishName(dishesDisplay.front.name);
        setDisplayPopUp(true);
    }

    useEffect(() => {
        const timeOut = setTimeout(() => {
            setTurn(!turn);
            if(turn) setDishesDisplay({ ...dishesDisplay, front: dishes[index+1]});
            else setDishesDisplay({ ...dishesDisplay, back: dishes[index+1]});
            if(index + 1 < dishes.length - 1) setIndex(index + 1);
            else setIndex(0);
        },3000);
        return () => clearTimeout(timeOut);
    })

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