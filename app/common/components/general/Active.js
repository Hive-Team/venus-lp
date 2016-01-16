import React, { Component, PropTypes , defaultProps } from 'react'
import { getRouter , httpGET } from '../../config/Api'

class Active extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentWillMount() {
    const { active } = this.props
    this.setState(active)
  }

  componentDidMount() {}

  componentWillReceiveProps(nextProps) {
    const { active } = nextProps
    this.setState(active)
  }

  render() {
    let pageData = this.state.pageData

    return (
      <ul className="list-6-wxjs clearfix">
        <li></li>
        <li></li>
        <li></li>
        {
            $.map(pageData,function(v,i){
                return(
                    <li key={i}>
                        <a className='href-box' href={v.photoUrl}>
                          <div className='href-content'>
                            <span className='img-box'><img src={v.photoUrl} /></span>
                            <h1>{v.plannerName}</h1>
                            <p>{v.description}</p>
                            <span className='time'>{v.price}</span>
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

Active.propTypes = {
}

Active.defaultProps = {
  active:{
    pageData:[],
  },
}

export default Active
