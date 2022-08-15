import axios from 'axios'
import type { AxiosInstance } from 'axios'
import type { CoRequestInterceptor, CoRequestConfig } from './type'

class CoRequest {
  instance: AxiosInstance
  interceptors?: CoRequestInterceptor

  constructor(config: CoRequestConfig) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors

    // 从 config 中取出的拦截器(interceptors)是对应的 实例 的拦截器
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )

    // 添加所有实例都有的拦截器
    this.instance.interceptors.request.use(
      (config) => {
        console.log('所有实例都有的拦截器：请求成功拦截')
        return config
      },
      (error) => {
        console.log('所有实例都有的拦截器：请求失败拦截')
        return error
      }
    )
    this.instance.interceptors.response.use(
      (resp) => {
        console.log('所有实例都有的拦截器：响应成功拦截')
        return resp
      },
      (error) => {
        console.log('所有实例都有的拦截器：响应失败拦截')
        return error
      }
    )
  }

  // 增加可扩展性 对某一个请求添加拦截器（可选）
  request(config: CoRequestConfig): void {
    if (config.interceptors?.requestInterceptor) {
      config = config.interceptors.requestInterceptor(config)
    }

    this.instance.request(config).then((resp) => {
      if (config.interceptors?.responseInterceptor) {
        resp = config.interceptors.responseInterceptor(resp)
      }
      console.log(resp)
    })
  }

  // request(config: AxiosRequestConfig): void {
  //   this.instance.request(config).then((resp) => {
  //     console.log(resp)
  //   })
  // }
}

export default CoRequest
