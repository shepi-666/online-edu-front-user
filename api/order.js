import request from '@/utils/request'
export default {

  // 生成订单
 createdOrder(courseId) {
    return request({
      url: `/order/${courseId}`,
      method: 'post',
    })
  },

  // 根据id查询订单信息
  getInfo(id) {
    return request({
      url: `/order/getInfo/${id}`,
      method: 'get',
    })
  },

  // 生成二维码的方法
  getQRCode(orderNo) {
    return request({
      url: `/order/paylog//qrcode/${orderNo}`,
      method: 'get',
    })
  },

  // 查询订单状态
  getOrderStatus(orderNo) {
    return request({
      url: `/order/paylog/getstatus/${orderNo}`,
      method: 'get',
    })
  }
}
