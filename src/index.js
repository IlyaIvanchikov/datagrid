import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/App'
import 'bootstrap/dist/css/bootstrap.min.css'
import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import rootReducer from './store/reducers/rootReducer'
import thtottlr from 'lodash.throttle'
import { loadState, saveState } from './localStorage'

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose
const presistedState = loadState()
const store = createStore(
  rootReducer,
  presistedState,
  composeEnhancers(applyMiddleware(thunk))
)

store.subscribe(
  thtottlr(() => {
    saveState({
      sort: store.getState().sort,
      search: store.getState().search,
      check: store.getState().check,
      enum: store.getState().enum,
    })
  }, 1000)
)
const app = (
  <Provider store={store}>
    <App />
  </Provider>
)

ReactDOM.render(app, document.getElementById('root'))
