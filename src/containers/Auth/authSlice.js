import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

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
    logout(state) {
      state.token = null
      state.userId = null
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

//const {} = authSlice.actions

export const actions = { signUp, signIn }

export default authSlice.reducer
