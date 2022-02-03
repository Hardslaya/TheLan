
import Info from "./Dishes";

const courses = ["Entrantes", "Platos principales", "Postres", "Bebidas"];

const Courses = ({ menu, handleClick }) => {  

    //arreglar el warning que da <>

    return (
        <section className="itemsSelection">
            <div className="itemsSelection__main">
            {
                courses.map((item, index) => {
                    return (
                        <>
                            <p key={item + "P"}>{item}</p>
                            <div key={item} className="itemsSelection__main__course"> 
                                {
                                    menu[index].flat().map((meal) => {
                                        return ( 
                                            <div key={meal.name} className="itemsSelection__main__course__dish">
                                                <Info 
                                                    meal={meal} 
                                                    handleClick={() => handleClick(meal.name, meal.price)}
                                                />
                                            </div>
                                        );
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