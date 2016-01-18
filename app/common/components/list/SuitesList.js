import React, { Component, PropTypes , defaultProps } from 'react'
import ImageItem from '../general/ImageItem'

class SuitesData extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentWillMount() {
    this.setState({
      data : this.props.suitesData,
    })
  }

  componentWillReceiveProps(nextProps) {
    const { suitesData } = nextProps
    this.setState({
      data : suitesData
    })
  }

  render() {
    let winW = $(window).width() * 2
    const suiteUrl = this.props.suiteUrl

    return (
      <ul className="suite-list layout-center-box">
        {
          this.state.data.map(function(v,i){
            return(
              <li key={i} className="item-box">
                <a href={suiteUrl + v.id}>
                  <div className="img-box">
                    <ImageItem
                      frameWidth={winW}
                      url={window.Core.platform === 'wx' && v.wechatUrl || v.coverUrl}
                      />
                    <div className="layer-box"></div>
                  </div>
                  <div className="info-box">
                    <h3>{v.name}</h3>
                    <span>{v.description}</span>
                  </div>
                </a>
              </li>
            )
          })
        }
      </ul>
    )
  }
}

SuitesData.propTypes = {
  suitesData : PropTypes.array.isRequired,
}

SuitesData.defaultProps = {
  suitesData : [],
  suiteUrl : '#/suite/detail/',
}

export default SuitesData
