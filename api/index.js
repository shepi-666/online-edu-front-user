import request from '@/utils/request'
export default {
  getList() { // 查询热门课程和名师
    return request({
      url: `/eduservice/indexfront/index`,
      method: 'get'
    })
  }
}
