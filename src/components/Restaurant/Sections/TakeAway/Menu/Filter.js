
const Filter = ({ setFoodFilter, url, filter, setIsSelected, isSelected }) => {

    let style = '';
    if(filter === isSelected) style='lightgray solid 10px';

    return (
        
        <img src={require(`../../../../../img/${url}`)} 
        className={`filter filter--${filter}`} 
        style ={{outline: `${style}`}}
        onClick={() => {
            if(filter === isSelected){
                setIsSelected("");;
                setFoodFilter("");
            } else {
                setIsSelected(filter);
                setFoodFilter(filter);
            }
        }
    }/>
    );
}

export default Filter;