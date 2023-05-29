import request from '@/utils/request'

export default {
  /**
   * 给指定用户发送消息
   */
  sendMessage(data) {
    return request({
      url: '/push/pushOne',
      method: 'post',
      data: data
    })
  }
}

