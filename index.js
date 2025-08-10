//if react application import redux

//for js
const redux = require('redux')
const createStore = redux.createStore;

const BUY_CAKE = "BUY_CAKE"
const BUY_ICECREAM = "BUY_ICECREAM"
const BUY_CHOCLATE = "BUY_CHOCLATE"

// Action: which describes what happens --> contains type property, info property is optional
// Action creator: A function which returns an Action

function buyCake(){
    return{
        type: BUY_CAKE,
        info : "First Action"
    }
}

function buyIceCream(){
    return{
        type: BUY_ICECREAM,
        info: 'Second Action'
    }
}

function buyChoclate(){
    return{
        type : BUY_CHOCLATE,
        info : 'Third Action'
    }
}

// define the state 
const initialState = {
    numOfCakes : 10,
    numOfIceCreams : 20,
    numOfChoclate: 10
}

//define a reduces func : (prevState,action)=> newState

const reducer = (state=initialState,action) =>{
    switch(action.type){
        case BUY_CAKE:
            return{
                ...state,
                numOfCakes: state.numOfCakes-1
            }
        case BUY_ICECREAM:
            return{
                ...state,
                numOfIceCreams : state.numOfIceCreams -1
            }
        case BUY_CHOCLATE:
            return{
                ...state,
                numOfChoclate: state.numOfChoclate - 1
            }
        default:
            return state
    }

}

const store = createStore(reducer); //redux store holding application state

console.log('initial state',store.getState());

const unsubscribe=store.subscribe(()=>console.log('Updated state',store.getState()));

store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCream())
store.dispatch(buyChoclate())

unsubscribe()



