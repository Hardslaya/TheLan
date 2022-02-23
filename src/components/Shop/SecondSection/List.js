import { useEffect, useState, useReducer } from "react";
import Item from "./Item";
import { getAsyncStories, withError} from "./../../../api/bbdd"

const initialStoriesState = {
  loading: false,
  error: false,
  stories: []
}

const storiesReducer = (state, action) => {
  switch(action.type){
    case "STORIES_FETCH__INIT":
      return{
        loading: true,
        error: false,
        stories: []
      }
    case "STORIES_FETCH__SUCCESS":
      return{
        loading: false,
        error: false,
        stories: action.payload
      }
    case "STORIES_FETCH__ERROR":
      return{
        loading: false,
        error: true,
        stories: []
      }
    default:
      throw Error("action stories error")
  }
}



function List(props) {

  useEffect(() => {
    loadStories();
  }, []);

  const [storiesState, dispatchStories] = useReducer(storiesReducer, initialStoriesState);
  const { stories, loading, error } = storiesState;

  function loadStories(){
    dispatchStories({type: "STORIES_FETCH__INIT"})
    withError(getAsyncStories()).then(result => {
      dispatchStories({type: "STORIES_FETCH__SUCCESS", payload: result.data.stories})
    }).catch(_err => dispatchStories({type: "STORIES_FETCH__ERROR"}) );
  }

  if(error){
    return <>
      <p>Error!</p>
      <button onClick={loadStories}>Retry</button>
    </>
  }

  return loading ? <p>Loading...</p> : 
    <div className="secondsection-products">
      {stories.map(function (item){
        return(
            <div key={item.ObjectID} className="secondsection-products__card">
              <Item item={item} second={true} addCart={props.addCart}/>
            </div>
          );
        })}
    </div>
}



export default List;