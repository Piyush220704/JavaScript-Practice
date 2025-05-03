//this is the store file 

import {createStore, combineReducers, applyMiddleware} from 'redux'
import pizzaReducer from './pizza/PizzaReducers'
import burgerReducer from './burger/BurgerReducers'
import {thunk} from 'redux-thunk' //although reducers are pure functions thunk let us to make async calls in reducers 
import productReducer from './products/ProductReducers'
import logger from 'redux-logger'
import {composeWithDevTools} from 'redux-devtools-extension'

const rootReducer = combineReducers({
    pizza:  pizzaReducer,
    burger: burgerReducer,
    product: productReducer
})
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger, thunk)));

export default store