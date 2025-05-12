const redux = require('redux');
const createStore = redux.createStore

const ORDER_PIZZA = 'ORDER_PIZZA'
//action
// const action = {
//     type: ORDER_PIZZA,
//     shop_name : "pizza shop"
// }


//action creater
function orderPizza(){
    return {
        type: ORDER_PIZZA,
        shop_name : "pizza shop"
    }
}

//reducer
const initialState = {
    pizzaBase : 100
}

const reducer = (state=initialState, action)=>{
    switch(action.type){
        case ORDER_PIZZA:
            return{
                ...state,
                pizzaBase: state.pizzaBase-1
            }
        default:
            return state
    }
}


//store
//1-store needs to hold application state
const store = createStore(reducer)

//2-it exposes a method called getState which gives your application access to the currrent state in the store
console.log("intital state ",store.getState());

//3-Register listeners to the store via subscribe, it takes function as a parameter and it will be called every time the state changes
//the store.subscribe(listener) method in Redux returns a function that you call to unsubscribe the listener.
const unsubscribe = store.subscribe(()=>{
    console.log("updated state ",store.getState());
})

//4-allow state to be updated by dispatching actions
store.dispatch(orderPizza())
store.dispatch(orderPizza())
store.dispatch(orderPizza())
store.dispatch(orderPizza())
unsubscribe();
store.dispatch(orderPizza()) //this will not work as we have unsubscribed
