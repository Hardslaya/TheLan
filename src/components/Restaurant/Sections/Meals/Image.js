import { useEffect, useState } from "react";

const Image = ({ menu }) => {

    const [ randomCourse, setRandomCourse ] = useState(Math.floor(Math.random() * (menu.length)));
    const [ randomDish, setRandomDish ] = useState(Math.floor(Math.random() * (menu[randomCourse].length -1)));
    

    //let randomCourse = Math.floor(Math.random() * (menu.length -1));
    //let randomDish = Math.floor(Math.random() * (menu[randomCourse].length));

    useEffect(() => {
        const interval = setInterval(() => {
            setRandomCourse(Math.floor(Math.random() * (menu.length -1)));
            setRandomDish(Math.floor(Math.random() * (menu[randomCourse].length -1)))
            console.log()
        },6000);
    }, [])

    return (
        <div className="sections__meals--image">
            <div className="circle">
                <div className="circle__side circle__side--front">
                    <img src={require(`./../../../../img/${menu[randomCourse][randomDish].url}`)} alt="Plato" />
                </div>
                <div className="circle__side circle__side--back">
                    <span>{menu[randomCourse][randomDish].name}</span>
                </div>
            </div>
        </div> 
    );
}

export default Image;