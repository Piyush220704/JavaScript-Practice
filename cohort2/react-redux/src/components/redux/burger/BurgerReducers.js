import { ORDER_BURGER } from "./BurgerTypes"


const BurgerinitialState = {
    bugerBuns: 599
}

const burgerReducer = (state = BurgerinitialState, action)=>{
    switch(action.type){
        case ORDER_BURGER:
            return{...state, bugerBuns: state.bugerBuns > action.payload ? state.bugerBuns - action.payload : 0}
        default: 
            return state
    }
}

export default burgerReducer