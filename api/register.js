import request from '@/utils/request'
export default {
  sendCode(mail) { // 根据邮箱发送验证码
    return request({
      url: `/edumsm/send/${mail}`,
      method: 'get'
    })
  },

  // 注册的方法
  register(formItem) {
    return request({
      url: `/ucenter/registry`,
      method: 'post',
      data: formItem
    })
  }
}
