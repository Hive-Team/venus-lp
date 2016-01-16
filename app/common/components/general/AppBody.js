import React, { Component , PropTypes , defaultProps } from 'react'
import Header from './Header'
import Footer from './Footer'
import SlidingWindow from './SlidingWindow'

class AppBody extends Component {
  render() {
    return (
      <div className='app-container'>
        <div className='relative-box unpd-box' id='J_app_view'>
          <SlidingWindow/>
          <div className='wx-layer-box' id='J_layer'></div>

          {
            this.props.headerBool &&
            <Header/>
          }

          <div className={`${this.props.pagePD}pd-box`}>
            <div className='content-view'>
              <div className='scroll-view'>
                {this.props.children}
              </div>
            </div>
          </div>

          {
            this.props.footerBool &&
            <Footer/>
          }
        </div>
      </div>
    )
  }
}

AppBody.propTypes = {
  headerBool : PropTypes.bool.isRequired,
  footerBool : PropTypes.bool.isRequired,
  pagePD : PropTypes.string.isRequired,
}

AppBody.defaultProps = {
  headerBool : true,
  footerBool : false,
  pagePD : 't',                 // 参数 un,t,b,tb
}

export default AppBody
