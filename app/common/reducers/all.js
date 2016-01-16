import { ADV_TOP_REQUEST_DATA , ADV_LEFT_REQUEST_DATA ,
 SAMPLES_REQUEST_DATA , PRINGLES_REQUEST_DATA , SUITES_REQUEST_DATA ,
 SAMPLES_REQUEST_MORE_DATA , PRINGLES_REQUEST_MORE_DATA } from '../actions/all'

const initState = {
  params : {},
  req_counter : 0,
  sliderTopData : [],
  sliderLeftData : [],
  samples : {
    data : [],
    count : null,
  },
  pringles : {
    data : [],
    count : null,
  },
  suites : {
    data : [],
    count : null,
  },
}

export default function all( all = initState, action) {
  switch (action.type) {
    case ADV_TOP_REQUEST_DATA:
      return Object.assign({}, all, {
        req_counter : all.req_counter + 1,
        sliderTopData : action.data,
      })
    case ADV_LEFT_REQUEST_DATA:
      return Object.assign({}, all, {
        req_counter : all.req_counter + 1,
        sliderLeftData : action.data,
      })
    case SAMPLES_REQUEST_DATA:
      return Object.assign({}, all, {
        req_counter : all.req_counter + 1,
        samples : {
          data : all.samples.data.concat(action.data),
          count : action.count,
        },
        params : action.params,
      })
    case SAMPLES_REQUEST_MORE_DATA:
      return Object.assign({}, all, {
        samples : {
          data : all.samples.data.concat(action.data),
          count : action.count,
        },
        params : action.params,
      })
    case PRINGLES_REQUEST_DATA:
      return Object.assign({}, all, {
        req_counter : all.req_counter + 1,
        pringles : {
          data : all.pringles.data.concat(action.data),
          count : action.count,
        },
        params : action.params,
      })
    case PRINGLES_REQUEST_MORE_DATA:
      return Object.assign({}, all, {
        pringles : {
          data : all.pringles.data.concat(action.data),
          count : action.count,
        },
        params : action.params,
      })
    case SUITES_REQUEST_DATA:
      return Object.assign({}, all, {
        req_counter : all.req_counter + 1,
        suites : {
          data : all.suites.data.concat(action.data),
          count : action.count,
        },
      })
    default:
      return all
  }
}
