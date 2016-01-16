import React, { Component, PropTypes } from 'react'
import AppBody from '../general/AppBody'
import Slider from '../general/Slider'
import SamplesList from '../list/SamplesList'
import SuitesList from '../list/SuitesList'
import Promise from '../view/Promise'
import { httpGET } from '../../config/Api'

class Samples extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentWillMount() {
    const { samples } = this.props
    this.setState(samples)
  }

  componentDidMount() {
    const { request_adv_data , request_list_data } = this.props
    const params = {pageIndex:1,pageSize:6}
    const suite_params = {pageIndex:1,pageSize:3}

    request_adv_data('adv/samples_trip_top',params)
    request_list_data('sample/samples_trip_list',params)
    request_list_data('suite/samples_trip_list',suite_params)
  }

  componentWillReceiveProps(nextProps) {
    const { samples } = nextProps
    this.setState(samples)
  }

  shouldComponentUpdate() {
    if(this.state.req_counter < 2) return false
    else return true
  }

  clickMore() {
    const { request_list_data } = this.props
    let new_count = this.state.params.pageIndex * this.state.params.pageSize
    let params = this.state.params
    params.pageIndex ++

    new_count <= this.state.samples.count && request_list_data('sample/samples_trip_list',params)
  }

  render() {
    //console.log(this.state)

    return (
      <AppBody>
        <div className='samples-view'>

          <Slider sliderID={'slider_samples'} sliderData={this.state.sliderTopData} />

          <div className="gray-bg-box">
            <div className="photo-box layout-center-box"><img src="./assets/images/ypxx-sy.png" /></div>
            <div className="block-tit-box">
              <h1><b>样片欣赏</b></h1>
              <h2>Golden trip, so it's really good.</h2>
            </div>

            <SamplesList samplesData={this.state.samples.data} baseUrl={'sample/samples_trip_list'} />

            <div className="list-more-btn">
              <span onClick={this.clickMore.bind(this)}>查看更多</span>
            </div>
          </div>
          <div className="block-tit-box">
            <h1><span>金色旅拍</span><b>套系报价</b></h1>
            <h2>Golden trip, so it's really good.</h2>
          </div>

          <SuitesList suitesData={this.state.suitesData} baseUrl={'suite/samples_trip_list'} />

          <Promise/>

          <div className="bt-banner-adv"><a href="#"><img src="./assets/images/bt-bann-adv.jpg" /></a></div>
        </div>
      </AppBody>
    )
  }
}

Samples.propTypes = {
  request_adv_data: PropTypes.func.isRequired,
  request_list_data : PropTypes.func.isRequired,
}

export default Samples
