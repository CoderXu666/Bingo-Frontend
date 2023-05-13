import request from '@/utils/request'

export default {
  /**
   * 保存建议与评分
   * @param data
   * @returns {*}
   */
  saveAdvice(data) {
    return request({
      url: '/advice/save',
      method: 'post',
      data: data
    })
  },
  findUserStatistics(userName) {
    return request({
      url: `/user/find_by_username`,
      method: 'get',
      params: {
        userName: userName
      }
    })
  }
}

