import React from 'react'
import { render } from 'react-dom'
import { Router } from 'react-router'
import routes from './config/routes'
//把Core实例放到window上
window.Core =  require('./config/core')

render(
  routes,
  document.getElementById('root')
)
