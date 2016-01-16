import React, { Component, PropTypes , defaultProps } from 'react'
import ImageItem from '../general/ImageItem'

class SamplesData extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentWillMount() {
    this.setState({
      data : this.props.samplesData,
    })
  }

  componentWillReceiveProps(nextProps) {
    const { samplesData } = nextProps
    this.setState({
      data : samplesData
    })
  }

  render() {
    let winW = $(window).width() * 2
    let baseUrl = this.props.baseUrl

    return (
      <ul className="recommend-list layout-center-box">
        {
          this.state.data.map(function(v,i){
            return(
              <li key={i} className="item-box">
                <a href={'#/' + baseUrl + '/detail/' + v.id} className="img-box">
                  <ImageItem
                    frameWidth={winW}
                    url={window.Core.platform === 'wx' && v.wechatUrl || v.coverUrl}
                    />
                  <div className="title-box">
                    <h2>{v.name}</h2>
                  </div>
                </a>
                <div className="item-shadow"></div>
              </li>
            )
          })
        }
      </ul>
    )
  }
}

SamplesData.propTypes = {
  samplesData : PropTypes.array.isRequired,
  baseUrl : PropTypes.string.isRequired,
}

SamplesData.defaultProps = {
  samplesData : [],
}

export default SamplesData
