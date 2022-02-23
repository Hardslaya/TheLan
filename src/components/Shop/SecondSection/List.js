import { useEffect, useState, useReducer } from "react";
import Item from "./Item";
import {API_ENDPOINT, initialStoriesState, storiesReducer} from "./../../../helpers/getForAPI";
//import { getAsyncStories, withError} from "./../../../api/bbdd"



function List(props) {

  useEffect(() => {
    loadStories();
  }, []);

  const [storiesState, dispatchStories] = useReducer(storiesReducer, initialStoriesState);
  const { stories, loading, error } = storiesState;
  const [products, setProducts] = useState(8);
  console.log(products);

  function loadStories(){//falta asegurar que coge la ultima busqueda (27/01/2022 al final)
    dispatchStories({ type: 'STORIES_FETCH__INIT' });
    fetch(API_ENDPOINT).then(response => response.json())
      .then(result => dispatchStories({ type: 'STORIES_FETCH__SUCCESS', payload: result }))
      .catch(() => dispatchStories({ type: 'STORIES_FETCH__FAILURE' }));
  }

  if(error){
    return <>
      <p>Error!</p>
      <button onClick={loadStories}>Retry</button>
    </>
  }

  return loading ? <p>Loading...</p> : 
  <>
    <div className="secondsection-products">
      {stories.slice(0, products).map(function (item){
        return(
            <div key={item.ObjectID} className="secondsection-products__card">
              <Item item={item} second={true} addCart={props.addCart}/>
            </div>
          );
        })}
        
    </div>
    {stories.length !== products ?
    <div>
      <button className="button" onClick={() => setProducts(products + 8)}>View more</button>
    </div>
    : "" }
  </>
}



export default List;




  /*function loadStories(){
    dispatchStories({type: "STORIES_FETCH__INIT"})
    withError(getAsyncStories()).then(result => {
      dispatchStories({type: "STORIES_FETCH__SUCCESS", payload: result.data.stories})
    }).catch(_err => dispatchStories({type: "STORIES_FETCH__ERROR"}) );
  }*/