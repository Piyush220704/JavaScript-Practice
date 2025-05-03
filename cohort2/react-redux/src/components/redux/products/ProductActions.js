import { FETCH_REQUEST, FETCH_ERROR, FETCH_SUCCESS } from "./ProductTypes"
import axios from 'axios'
const fetchRequest = () => {
    return {
        type : FETCH_REQUEST
    }
}
const fetchError = (error)=>{
    return {
        type : FETCH_ERROR,
        payload: error
    }
}

const fetchSuccess = (products)=>{
    return {
        type : FETCH_SUCCESS,
        payload: products
    }
}

export const fetchProducts = ()=>{
    return (dispatch)=>{
        dispatch(fetchRequest())
        axios.get('https://fakestoreapi.com/products')
        .then((response)=>{
            var products = response.data;
            products = products.map((product)=>product.title);
            dispatch(fetchSuccess(products))
            // console.log(products)
        }).catch((error)=>{
            dispatch(fetchError(error.message))
            console.log(error.message)
        })  
    }
}