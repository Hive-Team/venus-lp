import React, { Component, PropTypes , defaultProps } from 'react'

class SlidingWindow extends Component {
  render() {
    return(
      <div className='sliding-window'>
        <div className='content-view'>
          <div className='scroll-view'>
            <ul className='nav-local'>
              <li><a>作品欣赏</a></li>
              <li><a>作品欣赏</a></li>
              <li><a>作品欣赏</a></li>
              <li><a>作品欣赏</a></li>
              <li><a>作品欣赏</a></li>
              <li><a>作品欣赏</a></li>
              <li><a>作品欣赏</a></li>
              <li><a>作品欣赏</a></li>
              <li><a>作品欣赏</a></li>
              <li><a>作品欣赏</a></li>
              <li><a>作品欣赏</a></li>
              <li><a>作品欣赏</a></li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

SlidingWindow.propTypes = {
}

SlidingWindow.defaultProps = {
}

export default SlidingWindow
