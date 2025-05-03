import React from 'react'
import {useSelector , useDispatch} from 'react-redux'
import {fetchProducts} from './redux/products/ProductActions'

function ProductsContainer() {
    const productsState = useSelector(state=>state.product)
    const dispatch = useDispatch();
  return (
    <>
        <button onClick={()=>dispatch(fetchProducts())}>click me</button>
        {productsState.loading?<h1>Loading...</h1>:null}
        {productsState.error?<h1>{productsState.error}</h1>:null}
        {productsState.products.map((product,index)=><h1 key={index}>{product}</h1>)}
    </>
  )
}

export default ProductsContainer