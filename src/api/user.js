import request from '@/utils/request'

export default {
  /**
   * 注册
   */
  register(data) {
    return request({
      url: '/user/register',
      method: 'post',
      data: data
    })
  },

  /**
   * 登录
   */
  login(data) {
    return request({
      url: '/user/login',
      method: 'post',
      data: data
    })
  }
}
