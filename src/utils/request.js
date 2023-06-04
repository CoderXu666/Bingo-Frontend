import axios from 'axios'

/**
 * Axios配置
 */
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})

/**
 * request interceptor
 */
service.interceptors.request.use(

)

/**
 * response interceptor
 */
service.interceptors.response.use(

)

export default service
