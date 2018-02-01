import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import App from './src/components/App.js'
import {reducer} from './src/reducers.js'

let store = createStore(
  reducer, 
  applyMiddleware(thunk)
  )

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root')
  );