import SectionMeals from "./Meals/SectionMeals.js";
import SectionDrinks from "./Drinks/SectionDrinks.js";
import SectionMenu from "./TakeAway/SectionMenu.js";
import { useEffect, useReducer } from "react";

const ACTIONS = {
    FETCH_DATA: "fetch_data",
    FETCH_SUCCESS: "fetch_success",
    FETCH_ERROR: "fetch_error"
}

const API_ENDPOINT = 'http://localhost:3001/menu';

function reducer( state, action ){
    switch (action.type) {
        case ACTIONS.FETCH_DATA:
            return {...state, isLoading: true, isError: false};
        case ACTIONS.FETCH_SUCCESS:
            return { data: action.payload, isLoading: false, isError: false};
        case ACTIONS.FETCH_ERROR:
            return {...state, isLoading: false, isError: true};
        default:
            return state;
    }
}

const Sections = () => {

    useEffect(() => {      
        dispatch( { type: ACTIONS.FETCH_DATA });
        fetch(API_ENDPOINT).then((response) => response.json())
        .then(result => dispatch({ type: ACTIONS.FETCH_SUCCESS, payload: result }))
        .catch(() => dispatch({ type: ACTIONS.FETCH_ERROR }))
    }, []);

    const [ state, dispatch ] = useReducer( reducer, { data: [], isError: false, isLoading: false } );

    const menu = [state.data.starters, state.data.mainCourse, state.data.dessert, state.data.beverages];

    //HACER QUE SI VIENES DE HOME HAGA 

    return (
        <main className="sections">

            { state.isError && <p>Error</p>}
            { state.isLoading ? 
                <p>Cargando...</p>//poner aquí un gif animado de cargando
                : 
                !state.isError && !menu.includes(undefined) &&
                <>           
                    <SectionMeals menu={menu}/>
                    <SectionDrinks />
                    <SectionMenu menu={menu}/>
                </>
            }           
        </main>
    );
}

export default Sections;