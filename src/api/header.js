import axios from '@/utils/axios'

/**
 * 发送邮件二维码
 */
export default {
  /**
   * 发送验证码给Email
   */
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
      url: '/customer/register',
      method: 'post',
      data
    })
  },

  /**
   * 登录
   */
  login(data) {
    return axios({
      url: '/customer/login',
      method: 'post',
      data
    })
  },

  /**
   * 解析Token
   */
  resolveToken(token) {
    return axios({
      url: '/customer/resolve_token',
      method: 'get',
      params: {
        token: token
      }
    })
  }
}

