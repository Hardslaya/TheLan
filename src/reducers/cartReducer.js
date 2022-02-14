
export const TYPES = {
  add:    "add",
  del:    "del",
};

export function reducerCart(state,action){

  switch(action.type){
    case TYPES.add:{
      let incart = false
      state.map(function (item){
        if(item.ObjectID == action.payload.ObjectID){
          incart = true
          return incart      
        }
      })
      if(incart == false){
        return [...state, {...action.payload, quantity:1}]
      }else{
        return [...state.map(item => item.ObjectID === action.payload.ObjectID ? {...item, quantity:item.quantity +1}:item)]
      }
    }

    case TYPES.del:{
      let incart = state.find((item) => item.ObjectID == action.payload.ObjectID)
      return incart.quantity > 1 
        ? [...state.map(item => item.ObjectID === action.payload.ObjectID 
          ? {...item, quantity:item.quantity -1}
          :item)] 
        : state.filter((item) => item.ObjectID !== action.payload.ObjectID)

    }

    default:
      return state;
  }
}

export const initialState = [];