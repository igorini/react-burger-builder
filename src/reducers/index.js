import { combineReducers } from 'redux'
import ingredientsReducer from 'containers/BurgerBuilder/burgerSlice'
import ordersReducer from 'containers/Orders/ordersSlice'

export default combineReducers({
  burger: ingredientsReducer,
  orders: ordersReducer,
})
