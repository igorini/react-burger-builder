import { combineReducers } from 'redux'
import ingredientsReducer from 'containers/BurgerBuilder/ingredientsSlice'

export default combineReducers({
  ingredients: ingredientsReducer,
})
