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
      url: '/send_email',
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
      url: '/register',
      method: 'post',
      data
    })
  },

  /**
   * 登录
   */
  login(data) {
    return axios({
      url: '/login',
      method: 'post',
      data
    })
  },

  /**
   * 移除头像
   */
  removeAvatar(objName) {
    return axios({
      url: '/remove_avatar',
      method: 'delete',
      params: {
        objectName: objName
      }
    })
  },

  /**
   * 解析Token
   */
  resolveToken(token) {
    return axios({
      url: '/resolve_token',
      method: 'get',
      params: {
        token: token
      }
    })
  }
}

