import CoRequest from './request'

const request = new CoRequest({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 10000,
  interceptors: {
    requestInterceptors: (config) => {
      console.log('请求成功拦截')
      return config
    },
    requestInterceptorsCatch: (error) => {
      console.log('请求失败拦截')
      return error
    },
    responseInterceptors: (resp) => {
      console.log('响应成功拦截')
      return resp
    },
    responseInterceptorsCatch: (error) => {
      console.log('响应失败拦截')
      return error
    }
  }
})

export default request
