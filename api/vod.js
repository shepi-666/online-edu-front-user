import request from '@/utils/request'
const api_name = '/vod/video'

export default {

  getPlayAuth(vid) {
    return request({
      url: `/eduvod/video/getauth/${vid}`,
      method: 'get'
    })
  }

}
