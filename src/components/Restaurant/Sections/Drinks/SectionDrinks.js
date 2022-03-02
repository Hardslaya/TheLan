import { useState, useReducer, useEffect, useCallback } from "react";
import Squares from "./Squares";
import Banner from "./Banner";
import { fetchApi } from "../../../../helpers/fetchApi";

const API_ENDPOINT = 'http://localhost:3001/banners';

const SectionDrinks = ({ reducerApi, ACTIONS_API }) => {

    useEffect(() => {
        fetchApi(API_ENDPOINT, dispatchApi, ACTIONS_API);
    },[]);

    useEffect(() => {   
        let interval = setInterval(() => { //changes the banner every 5 sec
            updateIndex(activeIndex + 1);
        }, 5000)
        return () => {
            clearInterval(interval);
        }
    }); 

    const [ stateApi, dispatchApi ] = useReducer( reducerApi, { data: [], isLoading: false, isError: false } );

    const [ activeIndex, setActiveIndex ] = useState(0);

    const banners = stateApi.data;

    const updateIndex = useCallback((newIndex) => { //changes the index making a loop from 0 to length-1
        if(newIndex < 0) setActiveIndex(banners.length - 1);
        else if(newIndex > banners.length - 1) setActiveIndex(0);
        else setActiveIndex(newIndex);
    });

    return (
        <section className="sections__carousel">
                { stateApi.isError && <p>Error</p>}
                { stateApi.isLoading ? <p>Cargando...</p>
                :
                !stateApi.isError && banners.length > 0 &&
                <>
                <a onClick={() => updateIndex(activeIndex - 1)}>
                    <span className="sections__carousel__arrow arrow--left sections__carousel__arrow--left"></span>
                </a>
                <div className="sections__carousel__inner" style={{transform: `translateX(-${activeIndex*100}%)`}}>
                    {banners.map((banner) => {
                            return (
                                <Banner key={banner.alt}
                                banner={banner}/>
                            )
                        })
                    } 
                </div>              
                <Squares
                    banners={banners} 
                    setActiveIndex={setActiveIndex} 
                    activeIndex= {activeIndex}
                />    
                <a onClick={() => updateIndex(activeIndex + 1)}>
                    <span className="sections__carousel__arrow arrow--right sections__carousel__arrow--right"></span> 
                </a>
                </>
                }    
        </section>     
    );
}

export default SectionDrinks;