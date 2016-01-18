import { combineReducers } from 'redux'
//import all from './all'
import home from './homeReducer'
import samples from './samplesReducer'
import pringles from './pringlesReducer'
import imageDetail from './imageDetailReducer'

const rootReducer = combineReducers({
  //all,
  home,
  samples,
  pringles,
  imageDetail,
})

export default rootReducer
