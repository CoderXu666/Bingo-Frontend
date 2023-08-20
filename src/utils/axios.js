import axios from 'axios'

/**
 * Axios配置
 */
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API
  // timeout: 5000
})

/**
 * 请求拦截器
 */
service.interceptors.request.use(

)

/**
 * 响应拦截器
 * 后端响应状态码不是200，进入到catch逻辑
 */
service.interceptors.response.use(
  response => {
    if (response.data.code !== 200) {
      return Promise.reject(response)
    } else {
      return response
    }
  },
  error => {
    return Promise.reject(error)
  }
)

export default service
