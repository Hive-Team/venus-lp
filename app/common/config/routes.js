import { Router,Route,browserHistory } from 'react-router'
import React from 'react'
import Home from '../components/pageview/Home'
import Samples from '../components/pageview/Samples'
import Pringles from '../components/pageview/Pringles'
import ImageDetail from '../components/pageview/ImageDetail'

const routes = (
    <Router history={browserHistory}>
      <Route path="/" component={Home} />
      <Route path="/sample" component={Samples} />
      <Route path="/sample/detail/:id" component={ImageDetail} />
      <Route path="/pringles" component={Pringles} />
      <Route path="/pringles/detail/:id" component={ImageDetail} />
      <Route path="/suite" component={Pringles} />
      <Route path="/suite/detail/:id" component={ImageDetail} />
    </Router>
)

export default routes
