import { createSlice } from '@reduxjs/toolkit'

const ingredientsSlice = createSlice({
  name: 'ingredients',
  initialState: null,
  reducers: {
    setIngredients(state, action) {
      return action.payload
    },
  },
})

export const { setIngredients } = ingredientsSlice.actions

export default ingredientsSlice.reducer
