
import {ORDER_BURGER} from './BurgerTypes'
const orderBurger = (number)=>{
    return{
        type: ORDER_BURGER,
        payload: number
    }
}
export {orderBurger}