import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {pizzaActions} from '../features/pizza/pizzaSlice'
function PizzaSlice() {
    const state = useSelector(state => state.pizza)
    const dispatch = useDispatch();
  return (
    <div>
        <h1>Number of burger buns - {state.pizzaBase}</h1>
        <button onClick={()=>dispatch(pizzaActions.pizzaOrder())}>Order Pizza</button>
    </div>
  )
}

export default PizzaSlice