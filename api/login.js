import request from '@/utils/request'
export default {

  // 登录方法
  login(userInfo) {
    return request({
      url: `/ucenter/login`,
      method: 'post',
      data: userInfo
    })
  },

  // 获取用户的信息
  getLoginInfo() {
    return request({
      url: `/ucenter/getMemberInfo`,
      method: 'get'
    })
  }
}
