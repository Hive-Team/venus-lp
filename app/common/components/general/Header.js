import React, { Component, PropTypes , defaultProps } from 'react'
import { getRouter } from '../../config/Api'

class Header extends Component {
  componentDidMount() {
    const winW = $(window).width()
    let J_menu_btn = $('#J_menu_btn')
    let J_drop_down_menu = $('#J_drop_down_menu')
    let J_win_rig_btn = $('#J_win_rig_btn')
    let J_btn_ico= J_win_rig_btn.find('.wx-menu-btn')
    let J_app_view = $('#J_app_view')
    let J_layer = $('#J_layer')
    let B_drop_down = false

    J_win_rig_btn.bind('click',function(){
      J_btn_ico.addClass('close')
      J_app_view.animate({
        marginLeft:-winW+50
      })

      J_layer.css('display','block').animate({
        opacity:0.8
      })
    })

    J_layer.bind('click',function(){
      J_btn_ico.removeClass('close')
      J_app_view.animate({
        marginLeft:0
      })

      $(this).animate({
        opacity:0
      },function(){
        $(this).css('display','none')
      })
    })

    J_menu_btn.bind('click',function(){
      (B_drop_down === false &&
      J_menu_btn.find('i').attr('class','arrow-b-1-ap') &&
      J_drop_down_menu.animate({
        height:50 * 3
      },300,function(){B_drop_down = true})) ||
      (B_drop_down === true &&
      J_menu_btn.find('i').attr('class','arrow-r-1-ap') &&
      J_drop_down_menu.animate({
        height:0
      },300,function(){B_drop_down = false}))
    })
  }

  render() {
    let text = this.props.title_conf[getRouter().getPath]

    return(
      <div className='app-header'>
        <div className='relative-box'>
          <div className='title-box' id='J_menu_btn'>
            <i className='arrow-r-1-ap'></i>
            <h1>{text || this.props.title}</h1>
          </div>
          <a style={{display:'block'}} href='//trip.jsbn.com'><div className='logo-box ico-sanya'></div></a>
          <div className='win-rig-btn' id='J_win_rig_btn'>
            <div className='menu-box'>
              <div className='wx-menu-btn'>
                <div className='bit-1'></div>
                <div className='bit-2'></div>
                <div className='bit-3'></div>
              </div>
            </div>
          </div>

          <ul className='drop-down-menu' id='J_drop_down_menu'>
            <li><a href='#/'>{`${'三亚'}首页`}</a></li>
            <li><a href='#/sample'>作品欣赏</a></li>
            <li><a href='#/pringles'>客片欣赏</a></li>
          </ul>
        </div>
      </div>
    )
  }
}

Header.propTypes = {
  title : PropTypes.string.isRequired,
}

Header.defaultProps = {
  title_conf : {
    '/' : '首页',
    '/sample' : '作品欣赏',
    '/pringles' : '客片片欣赏',
    '/suite':'套系'
  },
  title : '旅拍',
}

export default Header
