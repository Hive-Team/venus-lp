import React, { Component, PropTypes } from 'react'
import ImageItem from '../general/ImageItem'

class Slider extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentWillMount() {
    this.setState({
      data : this.props.sliderData,
    })
  }

  componentWillReceiveProps(nextProps) {
    const { sliderData } = nextProps
    this.setState({
      data : sliderData
    })
  }

  componentDidUpdate() {
    const $_id = '#' + this.props.sliderID
    $($_id).length>0 && $($_id).Slider()
  }

  render() {
    let winW = $(window).width() * 2

    return (
      <div className="bannar-all-box">
        <div id={this.props.sliderID} className="slider-box bannar">
          <ul className="slider">
            {
              this.state.data.map(function(v,i){
                return(
                  <li key={i} className='item transition-opacity-1'>
                    <a href="" className="img-box">
                      <ImageItem
                        frameWidth={winW}
                        url={window.Core.platform === 'wx' && v.coverUrlWx || v.coverUrlWeb}
                        />
                    </a>
                  </li>
                )
              })
            }
            <div className="point-box">
              {
                this.state.data.map(function(v,i){
                  return(
                    <li key={i} className="point"></li>
                  )
                })
              }
            </div>
          </ul>
        </div>
      </div>
    )
  }
}

Slider.propTypes = {
  sliderData : PropTypes.array.isRequired,
  sliderID : PropTypes.string.isRequired,
}

Slider.defaultProps = {
  sliderData : [],
  sliderID : '',
}

export default Slider
