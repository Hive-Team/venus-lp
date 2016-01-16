import { ADV_TOP_REQUEST_DATA , PRINGLES_REQUEST_DATA , SUITES_REQUEST_DATA } from '../actions/pringlesAction'

const initState = {
  params : {},
  req_counter : 0,
  sliderTopData : [],
  pringles : {
    data : [],
    count : 0,
  },
  suitesData : [],
}

export default function all( pringles = initState, action) {
  switch (action.type) {
    case ADV_TOP_REQUEST_DATA:
      return Object.assign({}, pringles, {
        req_counter : pringles.req_counter + 1,
        sliderTopData : action.data,
      })
    case PRINGLES_REQUEST_DATA:
      return Object.assign({}, pringles, {
        req_counter : pringles.req_counter + 1,
        pringles : {
          data : pringles.pringles.data.concat(action.data),
          count : action.count,
        },
        params : action.params,
      })
    case SUITES_REQUEST_DATA:
      return Object.assign({}, pringles, {
        req_counter : pringles.req_counter + 1,
        suitesData : action.data,
      })
    default:
      return pringles
  }
}
