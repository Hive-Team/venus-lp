import { ADV_TOP_REQUEST_DATA , SAMPLES_REQUEST_DATA , SUITES_REQUEST_DATA } from '../actions/samplesAction'

const initState = {
  params : {},
  req_counter : 0,
  sliderTopData : [],
  samples : {
    data : [],
    count : 0,
  },
  suitesData : [],
}

export default function all( samples = initState, action) {
  switch (action.type) {
    case ADV_TOP_REQUEST_DATA:
      return Object.assign({}, samples, {
        req_counter : samples.req_counter + 1,
        sliderTopData : action.data,
      })
    case SAMPLES_REQUEST_DATA:
      return Object.assign({}, samples, {
        req_counter : samples.req_counter + 1,
        samples : {
          data : samples.samples.data.concat(action.data),
          count : action.count,
        },
        params : action.params,
      })
    case SUITES_REQUEST_DATA:
      return Object.assign({}, samples, {
        req_counter : samples.req_counter + 1,
        suitesData : action.data,
      })
    default:
      return samples
  }
}
