import React, { Component , PropTypes , defaultProps } from 'react'
import AppBody from '../general/AppBody'
import Slider from '../general/Slider'
import SamplesList from '../list/SamplesList'
import PringlesList from '../list/PringlesList'
import SuitesList from '../list/SuitesList'
import PageFooter from '../view/PageFooter'
import { getRouter } from '../../config/Api'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as homeActions from '../../actions/homeAction'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentWillMount() {
    const { home } = this.props
    this.setState(home)
  }

  componentDidMount() {
    const { request_adv_data , request_list_data } = this.props
    const params = {pageIndex:1,pageSize:6}
    const pringles_params = {pageIndex:1,pageSize:8}
    const suite_params = {pageIndex:1,pageSize:4}

    request_adv_data('adv/trip_top',params)
    request_adv_data('adv/trip_hot_left',params)
    request_list_data('sample' + this.props.trip_list,params)
    request_list_data('pringles' + this.props.trip_list,pringles_params)
    request_list_data('suite' + this.props.trip_list,suite_params)
  }

  componentWillReceiveProps(nextProps) {
    const { home } = nextProps
    this.setState(home)
  }

  shouldComponentUpdate() {
    if(this.state.req_counter < 4) return false
    else return true
  }

  render() {
    return (
      <AppBody>
        <div className="home-view">
          <div className='logo-container'>
            <div className='logo-box ico-sanya'></div>
          </div>

          <Slider sliderID={'slider_home'} sliderData={this.state.sliderTopData} />

          <div className="gray-bg-box">
            <div className="photo-box layout-center-box"><img src="./assets/images/adv-bann.jpg" /></div>
            <div className="list-recommend layout-center-box">
              <div className="item-recomd-adv">
                  <a className="img-box" href=""><img src="//img.jsbn.com/images/tour-artwork-img1.jpg" /><div className="cover-layer"></div></a>
              </div>
              <ul className="recomd-nav">
                <li className="item-box">
                  <a href="#/sample"><img src="//img.jsbn.com/images/tour-artwork-Navimg1.jpg" /><div className="cover-layer"></div></a>
                </li>
                <li className="item-box">
                  <a href="#/pringles"><img src="//img.jsbn.com/images/tour-artwork-Navimg2.jpg" /><div className="cover-layer"></div></a>
                </li>
                <li className="item-box">
                  <a href="#"><img src="//img.jsbn.com/images/tour-artwork-Navimg3.jpg" /><div className="cover-layer"></div></a>
                </li>
                <li className="item-box">
                  <a href="#"><img src="//img.jsbn.com/images/tour-artwork-Navimg4.jpg" /><div className="cover-layer"></div></a>
                </li>
              </ul>
            </div>
          </div>

          <div className="block-tit-box">
            <h1><span>金色旅拍</span><b>样片好所以真的好</b></h1>
            <h2>Golden trip, so it's really good.</h2>
          </div>

          <SamplesList samplesData={this.state.samplesData} />

          <div className="gray-bg-box">
            <div className="block-tit-box">
              <h1><span>金色旅拍</span><b>好客片会说话</b></h1>
              <h2>Golden trip, so it's really good.</h2>
            </div>

            <PringlesList pringlesData={this.state.pringlesData} pringlesStyle={2} />
          </div>
          <div id='J_SuiteAnchor' className="block-tit-box">
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

Home.propTypes = {
  request_adv_data : PropTypes.func.isRequired,
  request_list_data : PropTypes.func.isRequired,
  trip_list : PropTypes.string.isRequired,
}

Home.defaultProps = {
  trip_list : '/trip_list',
}

function mapStateToProps(state) {
  return {
    home: state.home
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(homeActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
