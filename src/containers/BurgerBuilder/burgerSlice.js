import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios-orders'

const INGREDIENT_PRICES = {
  salad: 0.2,
  cheese: 0.3,
  meat: 0.7,
  bacon: 0.5,
}
const initialPrice = 0.2

const isPurchasable = (ingredients) => {
  const ingredientSum = Object.keys(ingredients)
    .map((key) => ingredients[key])
    .reduce((sum, el) => sum + el, 0)
  return ingredientSum > 0
}

const evalAuthRedirectPath = (purchasable) => (purchasable ? '/checkout' : '/')

const fetchIngredients = createAsyncThunk(
  'burger/fetchIngredients',
  async () => {
    const response = await axios.get('/ingredients.json')
    return response.data
  }
)

const updatePurchasable = (state) => {
  state.purchasable = isPurchasable(state.ingredients)
  state.authRedirectPath = evalAuthRedirectPath(state.purchasable)
}

const burgerSlice = createSlice({
  name: 'burger',
  initialState: {
    ingredients: null,
    price: initialPrice,
    purchasable: false,
    error: false,
    authRedirectPath: '/',
  },
  reducers: {
    addIngredient(state, action) {
      const ingredientName = action.payload
      state.ingredients = {
        ...state.ingredients,
        [ingredientName]: state.ingredients[ingredientName] + 1,
      }
      state.price = state.price + INGREDIENT_PRICES[ingredientName]
      updatePurchasable(state)
    },
    removeIngredient(state, action) {
      const ingredientName = action.payload
      state.ingredients = {
        ...state.ingredients,
        [ingredientName]: state.ingredients[ingredientName] - 1,
      }
      state.price = state.price - INGREDIENT_PRICES[ingredientName]
      updatePurchasable(state)
    },
  },
  extraReducers: {
    [fetchIngredients.fulfilled]: (state, action) => {
      const ingredients = action.payload
      state.ingredients = {
        salad: ingredients.salad,
        bacon: ingredients.bacon,
        cheese: ingredients.cheese,
        meat: ingredients.meat,
      }
      state.error = false
      state.price = initialPrice
      updatePurchasable(state)
    },
    [fetchIngredients.rejected]: (state) => {
      state.error = true
    },
  },
})

const { addIngredient, removeIngredient } = burgerSlice.actions

export const actions = {
  addIngredient,
  removeIngredient,
  fetchIngredients,
}
export default burgerSlice.reducer
