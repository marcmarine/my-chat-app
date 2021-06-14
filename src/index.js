import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import logger from 'redux-logger'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'

const messageReducer = (state = [], action) => {
  switch (action.type) {
    case 'NEW_MESSAGE':
      return state.concat(action.payload)
    default:
      return state
  }
}

const store = createStore(messageReducer, applyMiddleware(logger))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
