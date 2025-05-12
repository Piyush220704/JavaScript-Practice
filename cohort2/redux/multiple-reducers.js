const redux = require("redux");
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;

const ORDER_PIZZA = "ORDER_PIZZA";
const ORDER_BURGER = "ORDER_BURGER";

//action creater
function orderPizza() {
  return {
    type: ORDER_PIZZA,
  };
}

function orderBurger() {
  return {
    type: ORDER_BURGER,
  };
}
//reducer
const initialStateForPizza = {
  pizzaBase: 100,
};
const initialStateForBurger = {
  burgerBun: 200,
};
// const initialState = {
//   pizzaBase: 100,
//   burgerBun: 200,
// };

const reducerPizza = (state = initialStateForPizza, action) => {
  switch (action.type) {
    case ORDER_PIZZA:
      return {
        ...state,
        pizzaBase: state.pizzaBase - 1,
      };
    default:
      return state;
  }
};

const reducerBurger = (state = initialStateForBurger, action) => {
  switch (action.type) {
    case ORDER_BURGER:
      return {
        ...state,
        burgerBun: state.burgerBun - 1,
      };
    case ORDER_PIZZA:
        return {
            ...state,
            burgerBun: state.burgerBun -1
        }
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  pizza: reducerPizza,
  burger: reducerBurger,
});
const store = createStore(rootReducer);
console.log("intital state ", store.getState());
const unsubscribe = store.subscribe(() => {
  console.log("updated state ", store.getState());
});

store.dispatch(orderPizza());
store.dispatch(orderPizza());
store.dispatch(orderPizza());
store.dispatch(orderBurger());
store.dispatch(orderBurger());
store.dispatch(orderBurger());

unsubscribe();
store.dispatch(orderPizza());

//to determine the individual state after combining the reducers we use store.initialState().<reducer_key_name> -> eg -> store.initialState().pizza
