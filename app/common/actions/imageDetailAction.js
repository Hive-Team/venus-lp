import { httpGET } from '../config/Api'

export const IMAGE_DETAIL_DATA = 'IMAGE_DETAIL_DATA'


//详情
export function img_detail_data(d) {
  return {
    type : IMAGE_DETAIL_DATA,
    data : d,
  }
}


//图片详情据请求
export function request_data(r) {
  return (dispatch, getState) => {
    httpGET(r)
      .done(payload => {
        //console.log(payload)

        dispatch(img_detail_data(payload.data))
      })
      .fail((err) => {
        console.log('error',err.responseText);
      })
  }
}
