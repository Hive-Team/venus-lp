import React , { Component }from 'react'
import { Provider } from 'react-redux'
import ContainerPringles from '../containers/ContainerPringles'
import configureStore  from '../store/configureStore'

const store = configureStore();

class RoutePringles extends Component {
  render() {
    return (
      <Provider store={store}>
        <ContainerPringles/>
      </Provider>
    )
  }
}

export default RoutePringles
