import React from 'react'
import { render } from 'react-dom'
import { Router } from 'react-router'
import routes from './config/routes'
import { Provider } from 'react-redux'
import configureStore  from './store/configureStore'

const store = configureStore();

//把Core实例放到window上
window.Core =  require('./config/core')

render(
  <Provider store={store}>
    {routes}
  </Provider>,
  document.getElementById('root')
)
