import axios from 'axios'

/**
 * Axios配置
 */
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})

/**
 * 请求拦截器
 */
service.interceptors.request.use(

)

/**
 * 响应拦截器
 */
service.interceptors.response.use(

)

export default service
