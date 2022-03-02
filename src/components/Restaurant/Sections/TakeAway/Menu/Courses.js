import Filter from "./Filter";
import Dishes from "./Dishes";
import { useEffect, useReducer, useState } from "react";
import { apiReducer, API_ACTIONS, fetchApi } from "../../../../../helpers/fetchApi";

const API_ENDPOINT = "http://localhost:3001/filtersList";

const courses = ["Entrantes", "Platos principales", "Postres", "Bebidas"];

const Courses = ({ menu, handleClick, setShow, show }) => { 
    
    useEffect(() => {      
        fetchApi(API_ENDPOINT, dispatchApi, API_ACTIONS);
    }, [])

    const [ foodFilter, setFoodFilter ] = useState([]); //determines the active filters

    const [ apiData, dispatchApi ] = useReducer( apiReducer, { data: [],  isLoading: true , isError: false,} );

    const filtersList = apiData.data;

    return (

        <section className="itemsSelection">
            <div className="itemsSelection__main">
            <div className="itemsSelection__main__filters">
                <span><i>Filtros:</i></span>
                {
                    apiData.isLoading ?
                    <p>Cargando...</p>
                    :
                    filtersList.map( item => {
                        return <Filter 
                            key={item.foodFilter} 
                            setFoodFilter={setFoodFilter}
                            foodFilter={foodFilter} 
                            url={item.url} 
                            filter={item.foodFilter}
                        />;
                    })
                }          
            </div>
            {
                courses.map((course, index) => {
                    return (
                        <section key={course}>
                            <p>{course}</p>
                            <div className="itemsSelection__main__course"> 
                                {
                                    menu[index].flat().map((meal) => {
                                        if(foodFilter.length === 0 || course === "Bebidas" || foodFilter.every(i => meal.filters.includes(i))){
                                            return ( 
                                                <div key={meal.name} className="itemsSelection__main__course__dish">
                                                    <Dishes 
                                                        meal={meal} 
                                                        handleClick={() =>{
                                                            handleClick(meal.name, meal.price);
                                                            setShow({...show, cart: true });
                                                        }}
                                                    />
                                                </div>
                                            );
                                        }
                                        
                                    })
                                }
                            </div>
                        </section>
                    );
                })
            }
            </div>
        </section>
    );
}

export default Courses;