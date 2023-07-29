import request from '@/utils/request'

export default {
  /**
   * 保存建议与评分
   */
  saveAdvice(data) {
    return request({
      url: '/advice/save',
      method: 'post',
      data: data
    })
  }
}

