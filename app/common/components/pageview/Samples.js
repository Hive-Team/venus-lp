import React, { Component, PropTypes , defaultProps } from 'react'
import AppBody from '../general/AppBody'
import Slider from '../general/Slider'
import SamplesList from '../list/SamplesList'
import SuitesList from '../list/SuitesList'
import PageFooter from '../view/PageFooter'
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
    const { request_adv_data , request_list_data , sample_list } = this.props
    const params = {pageIndex:1,pageSize:6}
    const suite_params = {pageIndex:1,pageSize:3}

    request_adv_data('adv/samples_trip_top',params)
    this.state.samples.data.length < 1 && request_list_data('sample' + sample_list,params)
    request_list_data('suite' + sample_list,suite_params)
  }

  componentWillReceiveProps(nextProps) {
    const { samples } = nextProps
    this.setState(samples)
  }

  shouldComponentUpdate() {
    //只有当所有数据返回的时候 render
    if(this.state.req_counter < 2) return false
    else return true
  }

  componentDidUpdate() {
    const $btn_more = $('#J_btn_more')
    this.state.samples.count <= this.state.samples.data.length && $btn_more.hide()
  }

  clickMore() {
    const { request_list_data , sample_list } = this.props
    let params = this.state.params
    params.pageIndex ++

    request_list_data('sample' + sample_list,params)
  }

  render() {
    //console.log(this.state)
    const sample_list = this.props.sample_list

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

            <SamplesList samplesData={this.state.samples.data}/>

            <div className="list-more-btn" id='J_btn_more'>
              <span onClick={this.clickMore.bind(this)}>查看更多</span>
            </div>
          </div>
          <div className="block-tit-box">
            <h1><span>金色旅拍</span><b>套系报价</b></h1>
            <h2>Golden trip, so it's really good.</h2>
          </div>

          <SuitesList suitesData={this.state.suitesData} />

          <PageFooter/>
        </div>
      </AppBody>
    )
  }
}

Samples.propTypes = {
  request_adv_data: PropTypes.func.isRequired,
  request_list_data : PropTypes.func.isRequired,
  sample_list : PropTypes.string.isRequired,
}

Samples.defaultProps = {
  sample_list : '/samples_trip_list',
}

export default Samples
