const store = require('./app/store');
const pizzaActions = require('./features/pizza/pizzaSlice').pizzaActions;
const burgerActions = require('./features/burger/burgerSlice').burgerActions; //named actions import module.exports.burgerActions = burgerSlice.actions -> burgerActions is the name
const {fetchProducts} = require('./features/product/productSlice')
console.log('intial state ', store.getState());


const unsubscribe = store.subscribe(()=>{
    console.log('update state ', store.getState());
})

store.dispatch(fetchProducts()).then(()=>{
    console.log("updated State " , store.getState());
})
// store.dispatch(pizzaActions.pizzaOrder())
// store.dispatch(burgerActions.burgerOrder())
// store.dispatch(pizzaActions.pizzaOrder())
// store.dispatch(pizzaActions.pizzaOrder())
// store.dispatch(pizzaActions.pizzaOrder())
// store.dispatch(burgerActions.burgerOrder())





unsubscribe();