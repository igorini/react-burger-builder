import { combineReducers } from 'redux'
import ingredientsReducer from 'containers/BurgerBuilder/burgerSlice'
import ordersReducer from 'containers/Orders/ordersSlice'
import authReducer from 'containers/Auth/authSlice'

export default combineReducers({
  burger: ingredientsReducer,
  orders: ordersReducer,
  auth: authReducer,
})
