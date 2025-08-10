const redux = require('redux')

const createStore = redux.createStore;

const BUY_RICE = "BUY_RICE";
const BUY_WHEAT = "BUY_WHEAT";

//action creators
const buyRice= (quantity)=>{
    return{
        type: BUY_RICE,
        payload : quantity,
        info: "rice redux"
    }
};

const buyWheat = ()=>{
    return{
        type: BUY_WHEAT,
        info: "wheat redux"
    }
};

const initialState ={
    riceBags : 50,
    wheatBags: 30
}

const reducer = (state=initialState, action)=>{
    switch(action.type){
        case BUY_RICE:
            return{
                ...state,
                riceBags : state.riceBags - action.payload,
            }
        case BUY_WHEAT:
            return{
                ...state,
                wheatBags : state.wheatBags - 1
            }
        default:
            return state
    }
};

const store = createStore(reducer);
console.log('Initial State',store.getState())

const unsubscribe = store.subscribe(()=>{
    console.log('Updated state', store.getState());
})

store.dispatch(buyRice(5))
store.dispatch(buyWheat())
store.dispatch(buyRice(2))
unsubscribe()
