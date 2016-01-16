import React from 'react'
import { render } from 'react-dom'
import { Router } from 'react-router'
import routes from './config/routes'
require('./config/core')

render(
  routes,
  document.getElementById('root')
)
