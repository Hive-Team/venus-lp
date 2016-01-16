import { combineReducers } from 'redux'
//import all from './all'
import home from './homeReducer'
import samples from './samplesReducer'
import pringles from './pringlesReducer'

const rootReducer = combineReducers({
  //all,
  home,
  samples,
  pringles,
})

export default rootReducer
