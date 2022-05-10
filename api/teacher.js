import request from '@/utils/request'
export default {

  // 分页讲师查询
 getTeacherList(page, limit) {
    return request({
      url: `/eduservice/teacherfront/getteacherfrontlist/${page}/${limit}`,
      method: 'post',
    })
  },

  // 获取用户的信息
  getTeacherInfo(id) {
    return request({
      url: `/eduservice/teacherfront/teacherdetail/${id}`,
      method: 'get',
    })
  }
}
