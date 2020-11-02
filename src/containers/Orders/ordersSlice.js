import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios-orders'
import _ from 'lodash'

const purchaseBurger = createAsyncThunk(
  'orders/purchaseBurger',
  async ({ token, order }) => {
    return await axios.post(`/orders.json?auth=${token}`, order)
  }
)

const fetchOrders = createAsyncThunk(
  'orders/fetchOrders',
  async ({ token, userId }) => {
    const response = await axios.get(
      `/orders.json?auth=${token}&orderBy="userId"&equalTo="${userId}"`
    )
    return !_.isEmpty(response.data)
      ? Object.keys(response.data).map((i) => ({
          ...response.data[i],
          id: i,
        }))
      : null
  }
)

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
    [purchaseBurger.rejected]: (state, action) => {
      state.purchaseLoading = false
      console.log(action)
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

const { initPurchase } = ordersSlice.actions

export const actions = { purchaseBurger, fetchOrders, initPurchase }

export default ordersSlice.reducer
