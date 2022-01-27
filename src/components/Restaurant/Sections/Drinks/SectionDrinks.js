import React, { useReducer, useEffect } from "react";
import Squares from "./Squares";
import Banner from "./Banner";

const banners = [
    {
        url: "wine.jpeg",
        alt: "wine",
        text: '"Disfruta de nuestros vinos de las mejores reservas"'
    },
    {
        url: "cocteles.jpg",
        alt: "cocktails",
        text:  '"Atrévete a probar nuestros nuevos cócteles de Juego de Tronos"'
    },
    {
        url: "hidromiel.jpg",
        alt: "mead",
        text:  '"Disfruta la bebida de los vikingos"'
    }   
];

const ACTIONS = {
    INCREMENT: "increment", 
    DECREMENT: "decrease",
    SELECT_INDEX: "select_index" 
}

const reducer = (state, action) => {
    switch(action.type) {
        case ACTIONS.INCREMENT:
            if(state.count + 1 > banners.length - 1) return { count : 0 }
            return { count : state.count + 1 }
        case ACTIONS.DECREMENT:
            if(state.count - 1 < 0) return { count : banners.length -1 }
            return { count : state.count - 1 }
        case ACTIONS.SELECT_INDEX:
            return { count : action.payload }
        default:
            return state;
    }
};

const SectionDrinks = () => {
    
    const [state, dispatch] = React.useReducer(reducer, { count : 0 });

    useEffect(() => {
        let interval = setInterval(() => {
            dispatch({ type : ACTIONS.INCREMENT})
        }, 5000)
        return () => {
            clearInterval(interval);
        }
    }); 

    return (
        <section className="sections sections__drinks">
                <a onClick={() => dispatch({ type : ACTIONS.DECREMENT})}>
                    <span className="sections__drinks__arrow arrow--left sections__drinks__arrow--left"></span>
                </a>
                <Banner state={state} banners={banners}/>
                <Squares dispatch={dispatch} banners={banners} ACTIONS={ACTIONS}/>    
                <a onClick={() => dispatch({ type: ACTIONS.INCREMENT })} >
                    <span className="sections__drinks__arrow arrow--right sections__drinks__arrow--right"></span> 
                </a>      
        </section>
       
    );
}

export default SectionDrinks;