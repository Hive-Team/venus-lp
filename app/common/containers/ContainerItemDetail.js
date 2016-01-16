import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import ItemDetail from '../components/pageview/ItemDetail'
import * as homeActions from '../actions/homeAction'

function mapStateToProps(state) {
  return {
    home: state.home
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(homeActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemDetail)
