import React, { Component, PropTypes } from 'react'
import AppBody from '../general/AppBody'
import { httpGET , getRouter } from '../../config/Api'
import _ from 'lodash'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as imageDetailAction from '../../actions/imageDetailAction'

class ImageDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {data:'[]'}
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
    let imgArr = JSON.parse(this.state.data||'[]')

    return (
      <AppBody>
        <div className='item-detail'>
          <div className="photo-box">
          {
// 详情图片是按照逆序从服务端给的。 并且由于是用一个字符串字段转换为对应到数组，因此服务端和前端无论缓存是否命中 都具备相同到顺序
            _.map(imgArr/*_.reverse(imgArr)*/,function(v,i){
              return (
                <img key={i} src={v+'@watermark=1&object=c2h1aXlpbi5wbmc&t=100&p=5&y=10&x=10'} />
              )
            })
          }
          </div>
        </div>
      </AppBody>
    )
  }
}

ImageDetail.propTypes = {
  request_data: PropTypes.func.isRequired,
}

function mapStateToProps(state) {
  return {
    imageDetail: state.imageDetail
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(imageDetailAction, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ImageDetail)
