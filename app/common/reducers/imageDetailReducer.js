import { IMAGE_DETAIL_DATA } from '../actions/imageDetailAction'

const initState = {
  data : '[]',
}

export default function all( imageDetail = initState, action) {
  switch (action.type) {
    case IMAGE_DETAIL_DATA:
      return {
        data : action.data.pcDetailImages
      }
    default:
      return imageDetail
  }
}
