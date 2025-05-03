import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { burgerActions } from '../features/burger/burgerSlice';
import { useState } from 'react'
function BurgerSlice() {
    const state = useSelector(state => state.burger)
    const [number, setNumber] = useState(0);
    const dispatch = useDispatch();
  return (
    <div>
        <h1>Number of burger buns - {state.burgerBuns}</h1>
        <input type="number" onChange={(e)=>setNumber(e.target.value)} placeholder="Enter number" />
        <button onClick={()=>dispatch(burgerActions.customer_choice(number))}>Order Burger</button>
    </div>
  )
}

export default BurgerSlice