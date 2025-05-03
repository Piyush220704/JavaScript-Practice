import {useSelector , useDispatch} from 'react-redux'
import React from 'react'
import {orderPizza} from './redux'

function HookContainer() {
  const pizzaBase = useSelector(state=>state.pizza.pizzaBase);
  const dispatch = useDispatch(); // return reference to dispatch function in our redux store
  
  return (
    <div className='container'>
        <h1 className='text'>
            number of pizzas base available - {pizzaBase}
        </h1>
        <button className="btn" onClick={()=>dispatch(orderPizza())}>Order Pizza</button>
    </div>
  )
}

export default HookContainer;


