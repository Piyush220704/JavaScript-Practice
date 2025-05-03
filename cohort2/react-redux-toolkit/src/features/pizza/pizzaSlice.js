import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    pizzaBase : 299
}

const pizzaSlice = createSlice({
    name: 'pizza',
    initialState,
    reducers: {
        pizzaOrder: (state)=>{
            state.pizzaBase = state.pizzaBase - 1
        }
    }
})

// console.log(pizzaSlice);
// module.exports = pizzaSlice.reducer
// module.exports.pizzaActions = pizzaSlice.actions

export const pizzaReducer = pizzaSlice.reducer;
export const pizzaActions = pizzaSlice.actions;