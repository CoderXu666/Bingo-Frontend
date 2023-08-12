import axios from '@/utils/axios'

/**
 * 发送邮件二维码
 */
export default {
  sendEmail(email) {
    return axios({
      url: '/customer/send_email',
      method: 'post',
      params: {
        email: email
      }
    })
  },

  /**
   * 注册
   */
  register(data) {
    return axios({
      url: '/customer/reigster',
      method: 'post',
      data
    })
  },

  /**
   * 注册
   */
  login(data) {
    return axios({
      url: '/user/info',
      method: 'post',
      data
    })
  }
}





