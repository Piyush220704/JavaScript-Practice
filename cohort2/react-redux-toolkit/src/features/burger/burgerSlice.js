import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    burgerBuns : 59
}

const burgerSlice = createSlice({
    name: 'burger',
    initialState,
    reducers: {
        burgerOrder: (state)=>{
            state.burgerBuns = state.burgerBuns - 1
        },
        customer_choice: (state, action)=>{
            state.burgerBuns = state.burgerBuns - action.payload
        }
    }
})

// console.log(burgerSlice);
export const burgerReducer = burgerSlice.reducer;
export const burgerActions = burgerSlice.actions;