export const API_ACTIONS = {
    FETCH_DATA: "fetch_data",
    FETCH_SUCCESS: "fetch_success",
    FETCH_ERROR: "fetch_error"
}

export function apiReducer( state, action ){
    switch (action.type) {
        case API_ACTIONS.FETCH_DATA:
            return {...state, isLoading: true, isError: false};
        case API_ACTIONS.FETCH_SUCCESS:
            return { data: action.payload, isLoading: false, isError: false};
        case API_ACTIONS.FETCH_ERROR:
            return {...state, isLoading: false, isError: true};
        default:
            return state;
    }
}
export function fetchApi(API_ENDPOINT, dispatchApi, ACTIONS_API){
    dispatchApi({ type:ACTIONS_API.FETCH_DATA })
    fetch(API_ENDPOINT).then(response => response.json())
    .then(result => dispatchApi({ type:ACTIONS_API.FETCH_SUCCESS, payload: result }))
    .catch(() => dispatchApi({ type: ACTIONS_API.FETCH_ERROR }));
}
