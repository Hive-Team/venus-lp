import React, { Component, PropTypes } from 'react'
import AppBody from '../general/AppBody'
import { httpGET } from '../../config/Api'

class ItemDetal extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentWillMount() {
    const { home } = this.props
    this.setState(home)
  }

  componentDidMount() {
    const { request_data } = this.props
    request_data()
  }

  componentWillReceiveProps(nextProps) {
    const { home } = nextProps
    this.setState(home)
  }

  render() {
    return (
      <AppBody pagePD={'un'} headerBool={false}>
        <div className='item-detail'>
          <div className="photo-box">
            <img src="./assets/images/banner-tour.jpg" />
            <img src="./assets/images/banner-tour.jpg" />
            <img src="./assets/images/banner-tour.jpg" />
            <img src="./assets/images/banner-tour.jpg" />
            <img src="./assets/images/banner-tour.jpg" />
            <img src="./assets/images/banner-tour.jpg" />
            <img src="./assets/images/banner-tour.jpg" />
          </div>
        </div>
      </AppBody>
    )
  }
}

ItemDetal.propTypes = {
  fetch_data: PropTypes.func.isRequired,
  request_data: PropTypes.func.isRequired,
}

export default ItemDetal
