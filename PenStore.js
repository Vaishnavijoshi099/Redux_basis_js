const redux = require('redux')
const createStore = redux.createStore;

const BUY_PENS= "BUY_PENS";

const buyPens=()=>{
    return{
        type : BUY_PENS,
        info : "Pen store redux"
    }
}

const initialState ={
    numOfPens : 40
}

const reducer = (state=initialState,action)=>{
    switch(action.type){
        case BUY_PENS:
            return{
                ...state,
                numOfPens : state.numOfPens - 1
            };
        default:
            return state
    }
}

const store = createStore(reducer)
console.log('Initial State',store.getState());
const unsubscribe = store.subscribe(()=>{
    console.log('Updated state', store.getState())
})
store.dispatch(buyPens());
store.dispatch(buyPens());
unsubscribe()


