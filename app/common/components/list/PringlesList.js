import React, { Component, PropTypes , defaultProps } from 'react'
import ImageItem from '../general/ImageItem'

class PringlesData extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentWillMount() {
    this.setState({
      data : this.props.pringlesData,
    })
  }

  componentWillReceiveProps(nextProps) {
    const { pringlesData } = nextProps
    this.setState({
      data : pringlesData
    })
  }

  pringlesStyle_1() {
    let winW = $(window).width() * 2
    const pringlesUrl = this.props.pringlesUrl

    return (
     <ul className="list-Sample layout-center-box">
       {
         this.state.data.map(function(v,i){
           return(
             <li key={i}>
               <a href={pringlesUrl + v.id} className="imgbox" target='_blank'>
                 <ImageItem
                   frameWidth={winW}
                   url={window.Core.platform === 'wx' && v.wechatUrl || v.coverUrl}
                   />
              </a>
              <a href="#" className="title-box" target='_blank'>
                <h2>{v.actorMaleName + ' & ' + v.actorFemaleName}</h2>
                <p>{v.description}</p>
              </a>
            </li>
           )
         })
       }
     </ul>
    )
  }

  render() {
    let winW = $(window).width() * 2
    const pringlesUrl = this.props.pringlesUrl

    if(this.props.pringlesStyle === 1){
      return (
         <ul className="recommend-list layout-center-box">
           {
             this.state.data.map(function(v,i){
               return(
                 <li key={i} className="item-box">
                   <a href={pringlesUrl + v.id} className="img-box" target='_blank'>
                     <ImageItem
                       frameWidth={winW}
                       url={window.Core.platform === 'wx' && v.wechatUrl || v.coverUrl}
                       />
                     <div className="layer-box"></div>
                     <div className="info-box">
                       <em>GoldenWedding</em>
                       <h2>{v.actorMaleName + ' & ' + v.actorFemaleName}</h2>
                     </div>
                   </a>
                   <div className="item-shadow"></div>
                 </li>
               )
             })
           }
         </ul>
       )
    }else if(this.props.pringlesStyle === 2){
      return this.pringlesStyle_1()
    }
  }
}

PringlesData.propTypes = {
  pringlesData : PropTypes.array.isRequired,
  pringlesStyle : PropTypes.number.isRequired,
}

PringlesData.defaultProps = {
  pringlesData : [],
  pringlesStyle : 1,
  pringlesUrl : '#/pringles/detail/'
}

export default PringlesData
