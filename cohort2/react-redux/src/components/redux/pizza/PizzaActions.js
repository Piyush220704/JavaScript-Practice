//PizzaActions

import {ORDER_PIZZA} from "./PizzaTypes"

//order pizza is an action creater
const orderPizza = ()=>{
    return {
        type: ORDER_PIZZA
    }
}

export {orderPizza}