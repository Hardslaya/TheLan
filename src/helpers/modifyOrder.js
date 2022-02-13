export const ACTIONS = {
    ADD_DISH: "add_dish",
    INCREMENT: "increment",
    DECREMENT: "decrement",
    DELETE_DISH: "delete",
    CHANGE_COUNT: "change_count"
}

export const orderReducer = (state, action) => {
    switch (action.type){
        case ACTIONS.ADD_DISH:
            return [...state, { name: action.payload.name, price: action.payload.price, count: 1}];
        case ACTIONS.INCREMENT:
            return state.map((item) => {
                if(item.name === action.payload) return {...item, count: Number(item.count) + 1};
                return item;
            });
        case ACTIONS.DECREMENT:
            return state.map((item) => {
                if(item.name === action.payload && (item.count - 1) > 0) return {...item, count: item.count - 1};
                return item;
            });
        case ACTIONS.DELETE_DISH:
            return state.filter(item => item.name !== action.payload.name);
        case ACTIONS.CHANGE_COUNT:
            return state.map((item) => {
                if(item.name === action.payload.name) return {...item, count: action.payload.count};
                return item;
            })    
        default:
                return state;
    }
}