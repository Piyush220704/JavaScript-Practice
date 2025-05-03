const createSlice = require('@reduxjs/toolkit').createSlice;
const initialState = {
    pizzaBase: 1000
}
const pizzaSlice = createSlice({
    name: 'pizza',
    initialState,
    reducers:{

        // pizzaOrder -> action creator and it only works as a reducer
        pizzaOrder : (state)=>{
            state.pizzaBase = state.pizzaBase - 1
        }
    }
})
// console.log(pizzaSlice.reducer);
// console.log(pizzaSlice.actions);

module.exports = pizzaSlice.reducer; //default export
module.exports.pizzaActions = pizzaSlice.actions //names export