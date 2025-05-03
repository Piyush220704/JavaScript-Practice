const {configureStore} = require('@reduxjs/toolkit');
const pizzaReducer = require('../features/pizza/pizzaSlice');
const burgerReducer = require('../features/burger/burgerSlice'); //default import burger reducer module.exports = burgerSlice.reducer
const productReducer = require('../features/product/productSlice');
// const reduxLogger = require('redux-logger');
// const logger = reduxLogger.createLogger();
const store = configureStore({
    reducer: {
        pizza: pizzaReducer,
        burger: burgerReducer,
        product: productReducer
    },
    // middleware: (getDefaultMiddleware)=> getDefaultMiddleware().concat(logger)
})

module.exports = store