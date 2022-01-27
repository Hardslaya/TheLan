
import Info from "./Info";

const courses = ["Entrantes", "Platos principales", "Postres", "Bebidas"];

const Menu = ({ menu, handleClick}) => {  

    return (
        <section className="itemsSelection">
            {
                courses.map((item, index) => {
                    return (
                        <div key={item} className="itemsSelection__course">
                            <p>{item}</p>
                            {
                                menu[index].flat().map((meal) => {
                                    return ( 
                                        <div key={meal.name} className="itemsSelection__course__dish">
                                            <Info meal={meal} 
                                            handleClick={() => handleClick(meal.name)}/>
                                        </div>
                                    );
                                })
                            }
                        </div>
                    );
                })
            }
        </section>
    );
}

export default Menu;