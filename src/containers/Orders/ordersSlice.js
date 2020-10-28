import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios-orders'

const purchaseBurger = createAsyncThunk(
  'orders/purchaseBurger',
  async (payload) => {
    const response = await axios.post('/orders.json', payload)
    return response.data
  }
)

const ordersSlice = createSlice({
  name: 'orders',
  initialState: {
    orders: [],
    loading: false,
    purchased: false,
  },
  reducers: {
    initPurchase(state) {
      state.purchased = false
    },
  },
  extraReducers: {
    [purchaseBurger.pending]: (state) => {
      state.loading = true
    },
    [purchaseBurger.fulfilled]: (state, action) => {
      state.orders.push(action.payload)
      state.loading = false
      state.purchased = true
    },
    [purchaseBurger.rejected]: (state) => {
      state.loading = false
    },
  },
})

export const { initPurchase } = ordersSlice.actions

export const actions = { purchaseBurger, initPurchase }

export default ordersSlice.reducer
