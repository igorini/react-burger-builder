import { combineReducers } from 'redux'
import ingredientsReducer from 'containers/BurgerBuilder/burgerSlice'

export default combineReducers({
  burger: ingredientsReducer,
})
