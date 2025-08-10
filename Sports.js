const redux = require('redux')

const createStore = redux.createStore;

const BUY_FOOTBALL = "BUY_FOOTBALL";
const BUY_BAT = "BUY_BAT";

// Action creators
const buyFootball= (quantity)=>{
    return{
        type: BUY_FOOTBALL,
        payload: quantity,
        info: "Buy footballs"
    }
};

const buyBats = (quantity)=>{
    return{
        type: BUY_BAT,
        payload:quantity,
        info: "Buy Bats"
    }
};

const initialFootballs ={
    footballs : 20
}

const initialBats = {
    bats : 50
}

const footballReducer = (state=initialFootballs,action)=>{
    switch(action.type){
        case BUY_FOOTBALL:
            return{
                ...state,
                footballs: state.footballs - action.payload
            }
        default:
            return state
    }
}

const batReducer = (state=initialBats,action)=>{
    switch(action.type){
        case BUY_BAT:
            return{
                ...state,
                bats : state.bats-action.payload
            }
        default:
            return state
    }
}

const rootReducer = redux.combineReducers({
    football : footballReducer,
    bat : batReducer
})

const store = createStore(rootReducer)

console.log('initial state',store.getState())

const unsubscribe = store.subscribe(()=>{
    console.log("Updated state",store.getState())
});

store.dispatch(buyFootball(2))
store.dispatch(buyBats(1))
store.dispatch(buyFootball(3))
store.dispatch(buyBats(2))

unsubscribe()