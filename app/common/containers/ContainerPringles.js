import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Pringles from '../components/pageview/Pringles'
import * as pringlesAcitions from '../actions/pringlesAction'

function mapStateToProps(state) {
  return {
    pringles: state.pringles
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(pringlesAcitions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Pringles)
