import { useEffect, useState } from "react";

const Filter = ({ setFoodFilter, foodFilter, url, filter }) => {

    const [ isSelected, setIsSelected] = useState(false);
    
    let style = '';
    if(isSelected) style='lightgray solid 10px';

    useEffect(() => {
        let newArray = [];
        if(isSelected){
            newArray = [...foodFilter, filter];
        } else {
            newArray = foodFilter.filter((e) => e !== filter );
        }
        setFoodFilter(newArray);
    },[isSelected])            

    return (      
        <img src={require(`../../../../../img/${url}`)} 
        className={`filter filter--${filter}`} 
        style ={{outline: `${style}`}}
        onClick={() => {           
            setIsSelected(!isSelected);      
        }
    }/>
    );
}

export default Filter;