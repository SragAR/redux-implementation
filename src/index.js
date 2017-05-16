import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './reducers'
import App from './components/App'


let store = createStore(todoApp, { todos: [], visibilityFilter: 'SHOW_ALL' });

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

