import { useReducer, useState } from "react";
import Info from "./Info";

const courses = ["Entrantes", "Platos principales", "Postres", "Bebidas"];

const ACTIONS = {
    INCREMENT: "increment",
    DECREMENT: "decrement"
}

const reducer = (state, action) => {
    console.log(state[action.payload])
    switch (action.type){
        case ACTIONS.INCREMENT:
            return state.map((value,index) => {
                if(index === action.payload) return value += 1
                return value
            });
        case ACTIONS.DECREMENT:
            return state.map((value,index) => {
                if(index === action.payload && (value - 1) >= 0) return value -= 1
                return value
            });
    }
}

const Menu = (props) => {

    let initialCountArray = new Array(props.menu.flat().length).fill(0);

    const [state, dispatch] = useReducer(reducer, initialCountArray);

    function decCount(number){
        dispatch({ type: ACTIONS.DECREMENT, payload: number})
    }
    
    function incCount(number){
        dispatch({ type: ACTIONS.INCREMENT, payload: number})
    }

    return (
        <section className="itemsSelection">
            {
                courses.map((item, index) => {
                    return (
                        <div key={item} className="itemsSelection__course">
                            <p>{item}</p>
                            {
                                props.menu[index].flat().map((meal) => {
                                    return ( 
                                        <div key={meal.name} className="itemsSelection__course__dish">
                                            <Info meal={meal} 
                                            incCount={incCount}
                                            decCount={decCount}
                                            count={state[meal.objectId]}
                                            />
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