import {useSelector , useDispatch} from 'react-redux'
import React from 'react'
import {orderBurger} from './redux'

function  BurgerBox() {
  const bugerBuns = useSelector(state=>state.burger.bugerBuns);
  const dispatch = useDispatch(); // return reference to dispatch function in our redux store
  return (
    <div className='container'>
        <h1 className='text'>
            number of burger buns available - {bugerBuns}
        </h1>
        <button className="btn" onClick={()=>dispatch(orderBurger())}>Order Burger</button>
    </div>
  )
}

export default BurgerBox;


