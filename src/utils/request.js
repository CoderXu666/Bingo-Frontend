import axios from 'axios'

/**
 * create an axios instance
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
