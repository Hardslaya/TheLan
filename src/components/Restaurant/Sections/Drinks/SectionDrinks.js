import React, { useReducer, useEffect, useCallback } from "react";
import Squares from "./Squares";
import Banner from "./Banner";
import { fetchApi } from "../../../../helpers/fetchApi";

const API_ENDPOINT = 'http://localhost:3001/banners';

const ACTIONS = {
    INCREMENT: "increment", 
    DECREMENT: "decrease",
    SELECT_INDEX: "select_index" 
}

const SectionDrinks = ({ reducerApi, ACTIONS_API }) => {

    const [ stateApi, dispatchApi ] = useReducer( reducerApi, { data: [], isLoading: false, isError: false } );

    useEffect(() => {
        fetchApi(API_ENDPOINT, dispatchApi, ACTIONS_API);
    },[])

    const banners = stateApi.data;
        
    const reducer = useCallback((state, action) => {
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
    });
    
    const [ state, dispatch ] = useReducer(reducer, { count : 0 });

    useEffect(() => {   
        let interval = setInterval(() => {
            dispatch({ type : ACTIONS.INCREMENT})
        }, 5000)
        return () => {
            clearInterval(interval);
        }
    },[state]); 

    return (
        <section className="sections sections__drinks">
                { state.isError && <p>Error</p>}
                { stateApi.isLoading ? <p>Cargando...</p>
                :
                !stateApi.isError && banners.length > 0 &&
                <>
                <a onClick={() => dispatch({ type : ACTIONS.DECREMENT})}>
                    <span className="sections__drinks__arrow arrow--left sections__drinks__arrow--left"></span>
                </a>
                <Banner state={state} banners={banners}/>
                <Squares dispatch={dispatch} banners={banners} ACTIONS={ACTIONS}/>    
                <a onClick={() => dispatch({ type: ACTIONS.INCREMENT })} >
                    <span className="sections__drinks__arrow arrow--right sections__drinks__arrow--right"></span> 
                </a>
                </>
                }    
        </section>     
    );
}

export default SectionDrinks;