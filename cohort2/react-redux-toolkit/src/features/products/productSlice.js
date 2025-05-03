import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
const initialState  = {
    products: [],
    loading: false,
    error: ''
}

export const fetchProducts = createAsyncThunk('products/fetchProducts', ()=>{
    return axios.get('https://fakestoreapi.com/products').then(res=>res.data)
})

const productSlice = createSlice({
    name: 'products',
    initialState ,
    extraReducers: (builder)=>{
        builder.addCase(fetchProducts.pending, (state)=>{
            state.loading = true
        })
        builder.addCase(fetchProducts.fulfilled, (state, action)=>{
            state.loading = false,
            state.products = action.payload
        })
        builder.addCase(fetchProducts.rejected, (state, action)=>{
            state.error = action.error.message;
        })
    }
})
export const productsReducer = productSlice.reducer