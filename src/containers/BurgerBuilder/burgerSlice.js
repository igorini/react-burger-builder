import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios-orders'

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

export const fetchIngredients = createAsyncThunk(
  'burger/fetchIngredients',
  async () => {
    const response = await axios.get('/ingredients.json')
    return response.data
  }
)

const burgerSlice = createSlice({
  name: 'burger',
  initialState: {
    ingredients: {},
    price: 0.2,
    purchasable: false,
    error: false,
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
  extraReducers: {
    [fetchIngredients.fulfilled]: (state, action) => {
      state.ingredients = action.payload
    },
    [fetchIngredients.rejected]: (state) => {
      state.error = true
    },
  },
})

export const { addIngredient, removeIngredient } = burgerSlice.actions

export default burgerSlice.reducer
