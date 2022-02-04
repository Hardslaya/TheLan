
export function fetchApi(API_ENDPOINT, dispatchApi, ACTIONS_API){
    dispatchApi({ type:ACTIONS_API.FETCH_DATA })
    fetch(API_ENDPOINT).then(response => response.json())
    .then(result => dispatchApi({ type:ACTIONS_API.FETCH_SUCCESS, payload: result }))
    .catch(() => dispatchApi({ type: ACTIONS_API.FETCH_ERROR }));
}