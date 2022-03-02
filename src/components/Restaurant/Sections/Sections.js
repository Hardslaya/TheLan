import SectionMeals from "./Meals/SectionMeals.js";
import SectionDrinks from "./Drinks/SectionDrinks.js";
import SectionMenu from "./TakeAway/SectionMenu.js";
import { useContext, useEffect, useReducer } from "react";
import { fetchApi } from "../../../helpers/fetchApi.js";
import { OrderContext } from "../../../helpers/orderContext.js";

const API_ENDPOINT = 'http://localhost:3001/menu';

const ACTIONS = {
    FETCH_DATA: "fetch_data",
    FETCH_SUCCESS: "fetch_success",
    FETCH_ERROR: "fetch_error"
}

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

const Sections = ({ order, orderDispatch, total, setTotal }) => {

    useEffect(() => {  
        fetchApi(API_ENDPOINT, dispatch, ACTIONS);    
    }, []);

    const [ state, dispatch ] = useReducer( reducer, { data: [],  isLoading: false , isError: false,} );

    const menu = [state.data.starters, state.data.mainCourse, state.data.dessert, state.data.beverages];

    const setDisplayOrder = useContext(OrderContext);

    return (
        <main className="sections">
            { state.isError && <p>Error</p>}
            { state.isLoading ? 
                <p>Cargando...</p>
                : 
                !state.isError && !menu.includes(undefined) &&
                <>           
                    <SectionMeals menu={menu}/>
                    <SectionDrinks reducerApi={reducer} ACTIONS_API={ACTIONS}/>
                    <SectionMenu 
                        menu={menu} 
                        order={order} 
                        orderDispatch={orderDispatch} 
                        setDisplayOrder={setDisplayOrder}
                        total={total}
                        setTotal={setTotal}
                    />
                </>
            }           
        </main>
    );
}

export default Sections;