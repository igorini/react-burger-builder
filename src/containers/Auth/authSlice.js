import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const LOCAL_STORAGE = {
  TOKEN: 'token',
  EXPIRATION_DATE: 'expirationDate',
  USER_ID: 'userId',
}

const signUp = createAsyncThunk('auth/signUp', async ({ email, password }) => {
  const response = await axios.post(
    'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCCsPzmhsZ_CuSp8Lsyec3XLUNjJZyWhTQ',
    { email: email, password: password, returnSecureToken: true }
  )
  return response.data
})

const signIn = createAsyncThunk(
  'auth/signIn',
  async ({ email, password }, thunkAPI) => {
    const response = await axios.post(
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCCsPzmhsZ_CuSp8Lsyec3XLUNjJZyWhTQ',
      { email: email, password: password, returnSecureToken: true }
    )
    const expirationDate = new Date(
      new Date().getTime() + response.data.expiresIn * 1000
    )
    localStorage.setItem(LOCAL_STORAGE.TOKEN, response.data.idToken)
    localStorage.setItem(LOCAL_STORAGE.EXPIRATION_DATE, expirationDate)
    localStorage.setItem(LOCAL_STORAGE.USER_ID, response.data.localId)
    thunkAPI.dispatch(logoutAfterMs(response.data.expiresIn * 1000))
    return response.data
  }
)

const logoutAfterMs = createAsyncThunk(
  'auth/logoutAfterMs',
  async (msBeforeLogout, thunkAPI) => {
    setTimeout(() => {
      thunkAPI.dispatch(authSlice.actions.logout())
    }, msBeforeLogout)
  }
)

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: null,
    userId: null,
    error: null,
    loading: false,
  },
  reducers: {
    initAuth(state) {
      const token = localStorage.getItem(LOCAL_STORAGE.TOKEN)
      if (!token) {
        logout(state)
      } else {
        const expirationDate = new Date(
          localStorage.getItem(LOCAL_STORAGE.EXPIRATION_DATE)
        )
        console.log('Expiration Date:', expirationDate, 'Now: ', new Date())
        if (expirationDate <= new Date()) {
          console.log('Token expired. Logging out')
          logout(state)
        } else {
          state.token = token
          state.userId = localStorage.getItem(LOCAL_STORAGE.USER_ID)
          console.log(state)
          logoutAfterMs(
            (expirationDate.getTime() - new Date().getTime()) / 1000
          )
        }
      }
    },
    logout(state) {
      state.token = null
      state.userId = null
      localStorage.removeItem(LOCAL_STORAGE.TOKEN)
      localStorage.removeItem(LOCAL_STORAGE.EXPIRATION_DATE)
      localStorage.removeItem(LOCAL_STORAGE.USER_ID)
    },
  },
  extraReducers: {
    [signUp.pending]: (state) => {
      console.log('Pending...')
      state.loading = true
      state.error = null
    },
    [signUp.fulfilled]: (state, action) => {
      console.log(action.payload)
      state.loading = false
      state.error = null
      state.token = action.payload['idToken']
      state.userId = action.payload['localId']
    },
    [signUp.rejected]: (state, action) => {
      console.log(action.error)
      state.loading = false
      state.error = action.error
    },
    [signIn.pending]: (state) => {
      console.log('Pending...')
      state.loading = true
      state.error = null
    },
    [signIn.fulfilled]: (state, action) => {
      console.log(action.payload)
      state.loading = false
      state.error = null
      state.token = action.payload['idToken']
      state.userId = action.payload['localId']
    },
    [signIn.rejected]: (state, action) => {
      console.log(action.error)
      state.loading = false
      state.error = action.error
    },
  },
})

const { logout, initAuth } = authSlice.actions

export const actions = { signUp, signIn, logout, initAuth }

export default authSlice.reducer
