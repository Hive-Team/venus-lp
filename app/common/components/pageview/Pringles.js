import React, { Component, PropTypes } from 'react'
import AppBody from '../general/AppBody'
import Slider from '../general/Slider'
import PringlesList from '../list/PringlesList'
import SuitesList from '../list/SuitesList'
import PageFooter from '../view/PageFooter'
import { httpGET } from '../../config/Api'

class Pringles extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentWillMount() {
    const { pringles } = this.props
    this.setState(pringles)
  }

  componentDidMount() {
    const { request_adv_data , request_list_data , pringles_list } = this.props
    const params = {pageIndex:1,pageSize:6}
    const suite_params = {pageIndex:1,pageSize:3}

    request_adv_data('adv/pringles_trip_top',params)
    this.state.pringles.data.length < 1 && request_list_data('pringles' + pringles_list,params)
    request_list_data('suite' + pringles_list,suite_params)
  }

  componentWillReceiveProps(nextProps) {
    const { pringles } = nextProps
    this.setState(pringles)
  }

  shouldComponentUpdate() {
    //只有当所有数据返回的时候 render
    if(this.state.req_counter < 2) return false
    else return true
  }

  componentDidUpdate() {
    const $btn_more = $('#J_btn_more')
    this.state.pringles.count <= this.state.pringles.data.length && $btn_more.hide()
  }

  clickMore() {
    const { request_list_data , pringles_list } = this.props
    let new_count = this.state.params.pageIndex * this.state.params.pageSize
    let params = this.state.params
    params.pageIndex ++

    new_count <= this.state.pringles.count && request_list_data('pringles' + pringles_list,params)
  }

  render() {
    //console.log(this.state)
    const pringles_list = this.props.pringles_list

    return (
      <AppBody>
        <div className='pringles-view'>

          <Slider sliderID={'slider_samples'} sliderData={this.state.sliderTopData} />

          <div className="gray-bg-box">
            <div className="photo-box layout-center-box"><img src="./assets/images/ypxx-sy.png" /></div>
            <div className="block-tit-box">
              <h1><b>客片欣赏</b></h1>
              <h2>Golden trip, so it's really good.</h2>
            </div>

            <PringlesList pringlesData={this.state.pringles.data}/>

            <div className="list-more-btn" id='J_btn_more'>
              <span onClick={this.clickMore.bind(this)}>查看更多</span>
            </div>
          </div>
          <div className="block-tit-box">
            <h1><span>金色旅拍</span><b>套系报价</b></h1>
            <h2>Golden trip, so it's really good.</h2>
          </div>

          <SuitesList suitesData={this.state.suitesData}/>

          <PageFooter/>
        </div>
      </AppBody>
    )
  }
}

Pringles.propTypes = {
  request_adv_data: PropTypes.func.isRequired,
  request_list_data : PropTypes.func.isRequired,
  pringlesStyle : PropTypes.number.isRequired,
  pringles_list : PropTypes.string.isRequired,
}

Pringles.defaultProps = {
  pringlesStyle : 1,
  pringles_list : '/pringles_trip_list',
}

export default Pringles
