import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Samples from '../components/pageview/Samples'
import * as samplesActions from '../actions/samplesAction'

function mapStateToProps(state) {
  return {
    samples: state.samples
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(samplesActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Samples)
