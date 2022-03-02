import Info from "./Info.js";
import Image from "./Image.js";
import { useEffect, useState } from "react";

const SectionMeals = ({ menu }) => {

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
        <section className="sections sections__meals">
                <Info 
                    handleClick={handleClick}
                />
                <Image 
                    menu={menu}
                    dishName={dishName}
                    turn={turn}
                    handleClick={handleClick}
                    setDisplayPopUp={setDisplayPopUp}
                    displayPopUp={displayPopUp}
                    dishesDisplay={dishesDisplay}
                />
        </section>
    );
}

export default SectionMeals;