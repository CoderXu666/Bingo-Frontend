import axios from 'axios'

/**
 * Axios配置
 */
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})

/**
 * 设置Axios的全局默认配置
 */
axios.defaults.validateStatus = status => {
  // 只有HTTP状态码为2xx时认为是成功的，其他状态码都认为是失败的
  console.log(status)
  return status !== 200
}

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
