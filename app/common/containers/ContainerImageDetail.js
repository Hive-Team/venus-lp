import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import ImageDetail from '../components/pageview/ImageDetail'
import * as imageDetailAction from '../actions/imageDetailAction'

function mapStateToProps(state) {
  return {
    imageDetail: state.imageDetail
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(imageDetailAction, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ImageDetail)
