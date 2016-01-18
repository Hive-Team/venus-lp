import React, { Component, PropTypes } from 'react'
import AppBody from '../general/AppBody'
import { httpGET , getRouter } from '../../config/Api'

class ItemDetal extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentWillMount() {
    const { imageDetail } = this.props
    this.setState(imageDetail)
  }

  componentDidMount() {
    const { request_data } = this.props
    const route = getRouter().getPath
    request_data(route)
  }

  componentWillReceiveProps(nextProps) {
    const { imageDetail } = nextProps
    this.setState(imageDetail)
  }

  render() {
    //console.log(this.state.data)
    let imgArr = JSON.parse(this.state.data)

    return (
      <AppBody>
        <div className='item-detail'>
          <div className="photo-box">
          {
            imgArr.map(function(v,i){
              return (
                <img key={i} src={v} />
              )
            })
          }
          </div>
        </div>
      </AppBody>
    )
  }
}

ItemDetal.propTypes = {
  request_data: PropTypes.func.isRequired,
}

export default ItemDetal
