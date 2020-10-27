import { createSlice } from '@reduxjs/toolkit'

const INGREDIENT_PRICES = {
  salad: 0.2,
  cheese: 0.3,
  meat: 0.6,
  bacon: 0.4,
}

const isPurchasable = (ingredients) => {
  const ingredientSum = Object.keys(ingredients)
    .map((key) => ingredients[key])
    .reduce((sum, el) => sum + el, 0)
  return ingredientSum > 0
}

const burgerSlice = createSlice({
  name: 'burger',
  initialState: {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
    price: 0.2,
    purchasable: false,
  },
  reducers: {
    addIngredient(state, action) {
      const ingredientName = action.payload
      state.ingredients = {
        ...state.ingredients,
        [ingredientName]: state.ingredients[ingredientName] + 1,
      }
      state.price = state.price + INGREDIENT_PRICES[ingredientName]
      state.purchasable = isPurchasable(state.ingredients)
    },
    removeIngredient(state, action) {
      const ingredientName = action.payload
      state.ingredients = {
        ...state.ingredients,
        [ingredientName]: state.ingredients[ingredientName] - 1,
      }
      state.price = state.price - INGREDIENT_PRICES[ingredientName]
      state.purchasable = isPurchasable(state.ingredients)
    },
  },
})

export const { addIngredient, removeIngredient } = burgerSlice.actions

export default burgerSlice.reducer
