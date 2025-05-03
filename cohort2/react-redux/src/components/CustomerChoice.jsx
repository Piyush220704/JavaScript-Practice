import {useSelector , useDispatch} from 'react-redux'
import React, { useCallback, useEffect, useState } from 'react'
import {orderBurger} from './redux'

function  CustomerChoice() {
  const bugerBuns = useSelector(state=>state.burger.bugerBuns);
  const dispatch = useDispatch(); // return reference to dispatch function in our redux store

  const [number, setNumber] = useState(1);
  const [debounceNumber, setDebounceNumber] = useState(number);

  const handleInputChange = useCallback ((e)=>{
    setNumber(e.target.value);
  }, [])
  useEffect(()=>{
    const timer = setTimeout(()=>{
        setDebounceNumber(number)
    },500)
    return ()=> clearTimeout(timer)
  },[number])
    return (
    <div className='container'>
        <h1 className='text'>
            number of burger buns available - {bugerBuns}
        </h1>
        <input type="text" className='input-field' placeholder='enter your order' value={number} onChange={handleInputChange}/>
        <button className="btn" onClick={()=>dispatch(orderBurger(debounceNumber))}>Order Burger</button>
    </div>
  )
}

export default CustomerChoice;


