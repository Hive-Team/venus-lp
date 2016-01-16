import React, { Component } from 'react'

class Promise extends Component {
  render() {
    return (
      <div className="promise">
        <div className="block-tit-box">
          <h1><span>金色百年婚纱摄影</span><b>九大承诺</b></h1>
          <h2>Golden Century wedding photography nine commitments</h2>
        </div>
       <div className="photo-box layout-center-box"><img src="./assets/images/promiseTxt.png" /></div>
       <div className="bt-border btborder">
          <ul className="list-promise">
            <li><h2>全城最高性价比</h2><p>City maximum price </p></li>
            <li><h2>先行制定拍摄计划</h2><p>City maximum price </p></li>
            <li><h2>绝无任何隐形消费</h2><p>City maximum price </p></li>
          </ul>
        </div>
        <div className="bt-border">
          <ul className="list-promise">
            <li><h2>不满意免费补拍或重拍</h2><p>City maximum price </p></li>
            <li><h2>重拍不满意退款</h2><p>City maximum price </p></li>
            <li><h2>全城独家激光摄影棚 </h2><p>City maximum price </p></li>
          </ul>
        </div>
        <div className="bt-border">
          <ul className="list-promise">
            <li><h2>全场Dior,CHANEL美妆</h2><p>City maximum price </p></li>
            <li><h2>主城九区没费送件上门</h2><p>City maximum price </p></li>
            <li><h2>400全程回访监督</h2><p>City maximum price </p></li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Promise
