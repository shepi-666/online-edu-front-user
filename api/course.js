import request from '@/utils/request'
export default {

  // 分页课程查询
 getCourseList(page, limit, searchObj) {
    return request({
      url: `/eduservice/coursefront/fontcourselist/${page}/${limit}`,
      method: 'post',
      data: searchObj
    })
  },

  // 查询所有的分类
  getSubjects() {
    return request({
      url: `/eduservice/edusubject/listsubject`,
      method: 'get',
    })
  },

  // 查看课程详情
  getCourseInfo(courseId) {
    return request({
      url: `/eduservice/coursefront/${courseId}`,
      method: 'get',
    })
  }
}
