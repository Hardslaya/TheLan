export const API_ENDPOINT = 'http://localhost:3001/productos';

export const initialStoriesState = {
  loading: false,
  error: false,
  stories: []
}

export const storiesReducer = (state, action) => {
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
    case "STORIES_FETCH_FAILURE":
      return{
        loading: false,
        error: true,
        stories: []
      }
    default:
      throw Error("action stories error")
  }
}