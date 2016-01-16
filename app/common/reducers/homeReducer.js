import { ADV_TOP_REQUEST_DATA , ADV_LEFT_REQUEST_DATA ,
 SAMPLES_REQUEST_DATA , PRINGLES_REQUEST_DATA , SUITES_REQUEST_DATA } from '../actions/homeAction'

const initState = {
  params : {},
  req_counter : 0,
  sliderTopData : [],
  sliderLeftData : [],
  samplesData : [],
  pringlesData : [],
  suitesData : [],
}

export default function all( home = initState, action) {
  switch (action.type) {
    case ADV_TOP_REQUEST_DATA:
      return Object.assign({}, home, {
        req_counter : home.req_counter + 1,
        sliderTopData : action.data,
      })
    case ADV_LEFT_REQUEST_DATA:
      return Object.assign({}, home, {
        req_counter : home.req_counter + 1,
        sliderLeftData : action.data,
      })
    case SAMPLES_REQUEST_DATA:
      return Object.assign({}, home, {
        req_counter : home.req_counter + 1,
        samplesData : action.data,
      })
    case PRINGLES_REQUEST_DATA:
      return Object.assign({}, home, {
        req_counter : home.req_counter + 1,
        pringlesData : action.data,
      })
    case SUITES_REQUEST_DATA:
      return Object.assign({}, home, {
        req_counter : home.req_counter + 1,
        suitesData : action.data,
      })
    default:
      return home
  }
}
