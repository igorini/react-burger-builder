import React from 'react'
import { render } from 'react-snapshot'
import 'index.css'
import App from 'App'
import * as serviceWorker from 'serviceWorker'
import { BrowserRouter } from 'react-router-dom'
import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './reducers'
import { Provider } from 'react-redux'

const store = configureStore({
  reducer: rootReducer,
})

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)

render(
  <React.StrictMode>{app}</React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
