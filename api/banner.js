import request from '@/utils/request'
export default {
  getListBanner() { // 查询banner的信息
    return request({
      url: `/educms/front/`,
      method: 'get'
    })
  }
}
