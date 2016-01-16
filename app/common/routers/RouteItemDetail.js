import React , { Component }from 'react'
import { Provider } from 'react-redux'
import ContainerItemDetail from '../containers/ContainerItemDetail'
import configureStore  from '../store/configureStore'

const store = configureStore();

class RouteItemDetail extends Component {
  render() {
    return (
      <Provider store={store}>
        <ContainerItemDetail/>
      </Provider>
    )
  }
}

export default RouteItemDetail
