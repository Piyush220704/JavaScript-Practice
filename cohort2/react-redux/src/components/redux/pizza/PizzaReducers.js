//wirte state and reducer in same file
//PizzaReducers.js
import { ORDER_PIZZA } from "./PizzaTypes"

const PizzainitialState = {
    pizzaBase : 1000
}

const pizzaReducer = (state = PizzainitialState, action)=>{
    switch(action.type){
        case ORDER_PIZZA:
            return {...state, pizzaBase: state.pizzaBase - 1}
        default:
            return state
    }
}
export default pizzaReducer;