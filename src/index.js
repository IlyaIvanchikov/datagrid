import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/App'
import 'bootstrap/dist/css/bootstrap.min.css'
import { createStore } from 'redux'
import { Provide, Provider } from 'react-redux'
import rootReducer from './redux/rootReducer'

const store = createStore(rootReducer)

const app = (
  <Provider store={store}>
    <App />
  </Provider>
)
ReactDOM.render(app, document.getElementById('root'))
