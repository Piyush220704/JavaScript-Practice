const redux = require('redux');
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware
const thunk = require('redux-thunk').thunk
const axios = require('axios')
const FETCH_REQUEST = 'FETCH_REQUEST'
const FETCH_SUCCESS = 'FETCH_SUCCESS'
const FETCH_ERROR = 'FETCH_ERROR'

//State
const initialState = {
    loading: false,
    products: [],
    error: false
}
 
//action creater
function fetchRequest(){
    return{
        type: FETCH_REQUEST
    }
}

function fetchSuccess(products){
    return {
        type: FETCH_SUCCESS,
        payload: products
    }
}

function fetchError(){
    return {
        type: FETCH_ERROR
    }
}

//reducers

const reducer = (state = initialState, action)=>{
    switch(action.type){
        case FETCH_REQUEST:
            return{
                ...state,
                loading: true
            }
        case FETCH_SUCCESS:
            return{
                ...state,
                loading: false,
                products: action.payload
            }
        case FETCH_ERROR:
            return{
                ...state,
                loading: false,
                error: true
            }
        default:
            return state
    }
}

//thunk action creator
const fetchProducts = () => {
    return function(dispatch){
        dispatch(fetchRequest());
        axios.get('https://fakestoreapi.com/products')
        .then(response=>{
            const products = response.data.map((product)=>{
                return product.title;
            });
            dispatch(fetchSuccess(products))
            
        }).catch(error=>{
            dispatch(fetchError());
        })
    }
}

//Creating Store
const store = createStore(reducer, applyMiddleware(thunk))
store.subscribe(()=>{
    console.log(store.getState());
})

store.dispatch(fetchProducts());
// console.log(store.getState());