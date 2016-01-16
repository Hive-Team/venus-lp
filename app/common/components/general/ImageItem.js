import React, { Component, PropTypes , defaultProps } from 'react'

class ImageItem extends Component {
  render() {
    let imgUrl = this.props.url
    let scaleW = (this.props.frameWidth)? this.props.frameWidth+'w_':'';
    let scaleH = (this.props.frameHeight)? this.props.frameHeight+'h_':'';

    imgUrl = window.Core.platform === 'wx' ? imgUrl + '@' + scaleW + scaleH + '90Q' : imgUrl + ''

    return(
      <img src={imgUrl} />
    )
  }
}

ImageItem.PropTypes = {
  url : PropTypes.string.isRequired,
  frameWidth : PropTypes.number.isRequired,
  frameHeight : PropTypes.number.isRequired,
}

export default ImageItem
