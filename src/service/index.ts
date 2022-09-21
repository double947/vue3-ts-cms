import CoRequest from './request'
import localCache from '@/utils/cache'

const request = new CoRequest({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 10000,
  interceptors: {
    requestInterceptor: (config: any) => {
      const token = localCache.getCache('token')
      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }
      // console.log('请求成功拦截')
      return config
    },
    requestInterceptorCatch: (error) => {
      // console.log('请求失败拦截')
      return error
    },
    responseInterceptor: (resp) => {
      // console.log('响应成功拦截')
      return resp
    },
    responseInterceptorCatch: (error) => {
      // console.log('响应失败拦截')
      return error
    }
  }
})

export default request
