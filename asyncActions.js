const redux = require('redux');
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;

// ✅ Correct thunk import
const thunkMiddleware = require('redux-thunk').thunk;

const axios = require('axios');

const initialState = {
    loading: false,
    users: [],
    error: ''
};

const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";

const fetch_users_request = () => ({ type: FETCH_USERS_REQUEST });
const fetch_users_success = (users) => ({ type: FETCH_USERS_SUCCESS, payload: users });
const fetch_users_failure = (error) => ({ type: FETCH_USERS_FAILURE, payload: error });

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USERS_REQUEST:
            return { ...state, loading: true };
        case FETCH_USERS_SUCCESS:
            return { loading: false, users: action.payload, error: '' };
        case FETCH_USERS_FAILURE:
            return { loading: false, users: [], error: action.payload };
        default:
            return state;
    }
};

const fetchusers = () => {
    return function (dispatch) {
        dispatch(fetch_users_request());
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                const users = response.data.map(user => user.name);
                dispatch(fetch_users_success(users));
            })
            .catch(error => {
                dispatch(fetch_users_failure(error.message));
            });
    };
};

const store = createStore(reducer, applyMiddleware(thunkMiddleware));

store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(fetchusers());
