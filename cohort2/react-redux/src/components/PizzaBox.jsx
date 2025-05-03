//PizzaBox.jsx

import React from 'react'
import { orderPizza } from './redux'
import { connect } from 'react-redux'
function PizzaBox(props) {
  console.log(props)
  return (
    <div className='container'>
        <h1 className='text'>
            number of pizzas base available - {props.pizzaBase} 
        </h1>
        <button className="btn" onClick={props.orderPizza}>Order Pizza</button>
    </div>
  )
}

const mapStateToProps = (state)=>{
  return {
    pizzaBase : state.pizzaBase
  }
}



const mapDispatchToProps = (dispatch)=>{
  return {
  orderPizza : ()=>{dispatch(orderPizza());}
  }
}

//what connect() does is it connects the PizzaBox component to the redux store
export default connect(mapStateToProps, mapDispatchToProps)(PizzaBox)


