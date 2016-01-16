import React , { Component }from 'react'
import { Provider } from 'react-redux'
import ContainerHome from '../containers/ContainerHome'
import configureStore  from '../store/configureStore'

const store = configureStore();

class RouteHome extends Component {
  render() {
    return (
      <Provider store={store}>
        <ContainerHome/>
      </Provider>
    )
  }
}

export default RouteHome
