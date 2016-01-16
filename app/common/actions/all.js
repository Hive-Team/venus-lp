import { httpGET } from '../config/Api'

export const ADV_TOP_REQUEST_DATA = 'ADV_TOP_REQUEST_DATA'
export const ADV_LEFT_REQUEST_DATA = 'ADV_LEFT_REQUEST_DATA'
export const SAMPLES_REQUEST_DATA = 'SAMPLES_REQUEST_DATA'
export const SAMPLES_REQUEST_MORE_DATA = 'SAMPLES_REQUEST_MORE_DATA'
export const PRINGLES_REQUEST_DATA = 'PRINGLES_REQUEST_DATA'
export const PRINGLES_REQUEST_MORE_DATA = 'PRINGLES_REQUEST_MORE_DATA'
export const SUITES_REQUEST_DATA = 'SUITES_REQUEST_DATA'


//顶部广告
export function adv_top_data(d) {
  return {
    type : ADV_TOP_REQUEST_DATA,
    data : d,
  }
}

//左边热区广告
export function adv_left_data(d) {
  return {
    type : ADV_LEFT_REQUEST_DATA,
    data : d,
  }
}

//样片
export function samples_data(d,p) {
  return {
    type : SAMPLES_REQUEST_DATA,
    data : d.data,
    count : d.count,
    params : p,
  }
}

//更多样片
export function samples_more_data(d,p) {
  return {
    type : SAMPLES_REQUEST_MORE_DATA,
    data : d,
    params : p,
  }
}

//客片
export function pringles_data(d,p) {
  return {
    type : PRINGLES_REQUEST_DATA,
    data : d.data,
    count : d.count,
    params : p,
  }
}

//更多客片
export function pringles_more_data(d,p) {
  return {
    type : PRINGLES_REQUEST_MORE_DATA,
    data : d,
    params : p,
  }
}

//套系
export function suites_data(d) {
  return {
    type : SUITES_REQUEST_DATA,
    data : d.data,
    count : d.count,
  }
}


//广告数据请求
export function request_adv_data(r,p) {
  let dir = r.split('_').pop()

  return (dispatch, getState) => {
    httpGET(r,p)
      .done(payload => {
        //console.log(payload);
        dir === 'top' &&
        dispatch(adv_top_data(payload.data)) ||
        dir === 'left' &&
        dispatch(adv_left_data(payload.data))
      })
      .fail((err) => {
        console.log('error',err.responseText);
      })
  }
}

//列表数据请求
export function request_list_data(r,p,first = true) {
  let list = r.split('/')[0]

  return (dispatch, getState) => {
    httpGET(r,p)
      .done(payload => {
        if(first){
          //询问是不是第一次请求数据
          list === 'sample' &&
          dispatch(samples_data(payload,p)) ||
          list === 'pringles' &&
          dispatch(pringles_data(payload,p)) ||
          list === 'suite' &&
          dispatch(suites_data(payload))
        }else{
          //不是第一次请求数据
          list === 'sample' &&
          dispatch(samples_more_data(payload.data,p)) ||
          list === 'pringles' &&
          dispatch(pringles_more_data(payload.data,p))
        }
      })
      .fail((err) => {
        console.log('error',err.responseText);
      })
  }
}
