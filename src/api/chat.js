import axios from '@/utils/axios'

/**
 * 发送邮件二维码
 */
export default {
  /**
   * 查询好友列表、聊天记录
   */
  chatList() {
    return axios({
      url: `/im/show/list`,
      method: 'get'
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

