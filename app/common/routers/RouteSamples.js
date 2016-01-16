import React , { Component }from 'react'
import { Provider } from 'react-redux'
import ContainerSamples from '../containers/ContainerSamples'
import configureStore  from '../store/configureStore'

const store = configureStore();

class RouteSamples extends Component {
  render() {
    return (
      <Provider store={store}>
        <ContainerSamples/>
      </Provider>
    )
  }
}

export default RouteSamples
