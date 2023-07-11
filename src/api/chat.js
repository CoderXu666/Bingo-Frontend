import request from '@/utils/request'

export default {
  /**
   * 给指定用户发送消息
   */
  sendMessage(data) {
    return request({
      url: '/chat/send_one',
      method: 'post',
      data: data
    })
  }

  /**
   * 向群聊发送消息
   */
}

