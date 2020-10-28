import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios-orders'
import _ from 'lodash'

const purchaseBurger = createAsyncThunk(
  'orders/purchaseBurger',
  async (payload) => {
    const response = await axios.post('/orders.json', payload)
    return response.data
  }
)

const fetchOrders = createAsyncThunk('orders/fetchOrders', async () => {
  const response = await axios.get('/orders.json')
  return !_.isEmpty(response.data)
    ? Object.keys(response.data).map((i) => ({
        ...response.data[i],
        id: i,
      }))
    : null
})

const ordersSlice = createSlice({
  name: 'orders',
  initialState: {
    orders: [],
    purchaseLoading: false,
    ordersLoading: false,
    purchased: false,
  },
  reducers: {
    initPurchase(state) {
      state.purchased = false
    },
  },
  extraReducers: {
    [purchaseBurger.pending]: (state) => {
      state.purchaseLoading = true
    },
    [purchaseBurger.fulfilled]: (state) => {
      state.purchaseLoading = false
      state.purchased = true
    },
    [purchaseBurger.rejected]: (state) => {
      state.purchaseLoading = false
    },
    [fetchOrders.pending]: (state) => {
      state.ordersLoading = true
    },
    [fetchOrders.fulfilled]: (state, action) => {
      if (!_.isEmpty(action.payload)) {
        state.orders = action.payload
      }
      state.ordersLoading = false
    },
    [fetchOrders.rejected]: (state) => {
      state.ordersLoading = false
    },
  },
})

export const { initPurchase } = ordersSlice.actions

export const actions = { purchaseBurger, fetchOrders, initPurchase }

export default ordersSlice.reducer
