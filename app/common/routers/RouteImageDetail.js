import React , { Component }from 'react'
import { Provider } from 'react-redux'
import ContainerImageDetail from '../containers/ContainerImageDetail'
import configureStore  from '../store/configureStore'

const store = configureStore();

class RouteImageDetail extends Component {
  render() {
    return (
      <Provider store={store}>
        <ContainerImageDetail/>
      </Provider>
    )
  }
}

export default RouteImageDetail
