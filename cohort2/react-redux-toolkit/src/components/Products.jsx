import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchProducts } from '../features/products/productSlice'
function Products() {
    const state = useSelector(state=>state.products)
    const dispatch = useDispatch()
    useEffect(()=>{dispatch(fetchProducts())},[])
  return (
    <div>
        {fetchProducts.pending? <h1>Loading...</h1>:null}
        {fetchProducts.fulfilled? (state.products.map(product=><h1 key={product.id}>{product.title}</h1>)): null}
        {fetchProducts.rejected? <h1>{state.error}</h1>:null}
    </div>
  )
}

export default Products