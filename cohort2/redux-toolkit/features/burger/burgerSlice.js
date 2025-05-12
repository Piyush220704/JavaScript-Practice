const { pizzaActions } = require('../pizza/pizzaSlice');

const createSlice = require('@reduxjs/toolkit').createSlice;
const initialState = {
    burgerBuns : 299
}
const burgerSlice = createSlice({
    name: 'burger',
    initialState,
    reducers:{
        burgerOrder: (state)=>{
            state.burgerBuns = state.burgerBuns-1
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(pizzaActions.pizzaOrder, (state)=>{
            state.burgerBuns = state.burgerBuns - 1
        })
    }
})

// console.log(burgerSlice);

module.exports = burgerSlice.reducer //reducer default export
module.exports.burgerActions = burgerSlice.actions //actions are exported as name exports