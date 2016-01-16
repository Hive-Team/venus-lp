import { Router, Route } from 'react-router'
import React from 'react'
import RoutHome from '../routers/RouteHome'
import RouteSamples from '../routers/RouteSamples'
import RoutePringles from '../routers/RoutePringles'
import RouteItemDetail from '../routers/RouteItemDetail'

const routes = (
    <Router>
      <Route path="/" component={RoutHome} />
      <Route path="/samples" component={RouteSamples}>
        <Route path="/:position/detail/:id" component={RouteItemDetail} />
      </Route>
      <Route path="/pringles" component={RoutePringles} />
      <Route path="/pringles/:id" component={RouteItemDetail} />
    </Router>
)

export default routes
