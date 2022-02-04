import Filter from "./Filter";
import Info from "./Dishes";
import { useState } from "react";

const courses = ["Entrantes", "Platos principales", "Postres", "Bebidas"];
const filtersList = [ 
    {
        url: "lactose.png",
        foodFilter: "lactose"
    },
    {
        url: "vegetarian.jpg",
        foodFilter: "vegetarian"
    },
    {
        url: "gluten.png",
        foodFilter: "gluten"

    }  
]

const Courses = ({ menu, handleClick }) => {  

    //arreglar el warning que da <>

    const [ isSelected, setIsSelected] = useState("");

    const [ foodFilter, setFoodFilter ] = useState("");

    return (
        <section className="itemsSelection">
            <div className="itemsSelection__main">
            <div className="itemsSelection__main__filters">
                <span><i>Filtros:</i></span>
                {
                    filtersList.map( item => {
                        return <Filter key={item.foodFilter} 
                        setFoodFilter={setFoodFilter} 
                        url={item.url} 
                        filter={item.foodFilter}
                        setIsSelected={setIsSelected}
                        isSelected={isSelected}/>;
                    })
                }          
            </div>
            {
                courses.map((course, index) => {
                    return (
                        <>
                            <p key={course + "P"}>{course}</p>
                            <div key={course} className="itemsSelection__main__course"> 
                                {
                                    menu[index].flat().map((meal) => {
                                        if(foodFilter.length === 0 || course === "Bebidas" || meal.filters.includes(foodFilter)){
                                            return ( 
                                                <div key={meal.name} className="itemsSelection__main__course__dish">
                                                    <Info 
                                                        meal={meal} 
                                                        handleClick={() => handleClick(meal.name, meal.price)}
                                                    />
                                                </div>
                                            );
                                        }
                                        
                                    })
                                }
                            </div>
                        </>
                    );
                })
            }
            </div>
        </section>
    );
}

export default Courses;