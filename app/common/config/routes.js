import { Router, Route,browserHistory } from 'react-router'
import React from 'react'
import RoutHome from '../routers/RouteHome'
import RouteSamples from '../routers/RouteSamples'
import RoutePringles from '../routers/RoutePringles'
import RouteImageDetail from '../routers/RouteImageDetail'

const routes = (
    <Router history={browserHistory}>
      <Route path="/" component={RoutHome} />
      <Route path="/sample" component={RouteSamples} />
      <Route path="/sample/detail/:id" component={RouteImageDetail} />
      <Route path="/pringles" component={RoutePringles} />
      <Route path="/pringles/detail/:id" component={RouteImageDetail} />
      <Route path="/suite" component={RoutePringles} />
      <Route path="/suite/detail/:id" component={RouteImageDetail} />
    </Router>
)

export default routes
