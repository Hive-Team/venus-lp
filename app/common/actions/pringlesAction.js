import { httpGET } from '../config/Api'

export const ADV_TOP_REQUEST_DATA = 'ADV_TOP_REQUEST_DATA'
export const PRINGLES_REQUEST_DATA = 'PRINGLES_REQUEST_DATA'
export const SUITES_REQUEST_DATA = 'SUITES_REQUEST_DATA'


//顶部广告
export function adv_top_data(d) {
  return {
    type : ADV_TOP_REQUEST_DATA,
    data : d,
  }
}

//样片
export function pringles_data(d,p) {
  return {
    type : PRINGLES_REQUEST_DATA,
    data : d.data,
    count : d.count,
    params : p,
  }
}

//套系
export function suites_data(d) {
  return {
    type : SUITES_REQUEST_DATA,
    data : d,
  }
}


//广告数据请求
export function request_adv_data(r,p) {
  return (dispatch, getState) => {
    httpGET(r,p)
      .done(payload => {
        //console.log(payload)

        dispatch(adv_top_data(payload.data))
      })
      .fail((err) => {
        console.log('error',err.responseText)
      })
  }
}

//列表数据请求
export function request_list_data(r,p) {
  let list = r.split('/')[0]

  return (dispatch, getState) => {
    httpGET(r,p)
      .done(payload => {
        //console.log(payload)

        list === 'pringles' &&
        dispatch(pringles_data(payload,p)) ||
        list === 'suite' &&
        dispatch(suites_data(payload.data))
      })
      .fail((err) => {
        console.log('error',err.responseText)
      })
  }
}
