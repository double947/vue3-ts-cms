import axios from 'axios'
import type { AxiosInstance } from 'axios'
import { ElLoading } from 'element-plus'
import type { LoadingOptionsResolved } from 'element-plus/es/components/loading/src/types'
import type { CoRequestInterceptor, CoRequestConfig } from './type'

const DEFAULT_LOADING = true
class CoRequest {
  instance: AxiosInstance
  interceptors?: CoRequestInterceptor
  showLoading: boolean
  loading?: LoadingOptionsResolved | any

  constructor(config: CoRequestConfig) {
    // 创建 axios 实例
    this.instance = axios.create(config)
    // 初始化一些默认值
    this.interceptors = config.interceptors
    this.showLoading = config.showLoading ?? DEFAULT_LOADING

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
        // console.log('所有实例都有的拦截器：请求成功拦截')

        if (this.showLoading) {
          this.loading = ElLoading.service({
            lock: true,
            text: '数据加载中...',
            background: 'rgba(0, 0, 0, 0.7)'
          })
        }
        return config
      },
      (error) => {
        // console.log('所有实例都有的拦截器：请求失败拦截')
        return error
      }
    )
    this.instance.interceptors.response.use(
      (resp) => {
        // console.log('所有实例都有的拦截器：响应成功拦截')

        // 移除loading
        this.loading?.close()
        return resp
      },
      (error) => {
        // console.log('所有实例都有的拦截器：响应失败拦截')

        // 移除loading
        this.loading?.close()
        return error
      }
    )
  }

  // 增加可扩展性 对某一个请求添加拦截器（可选）
  request<T>(config: CoRequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      // 对单个请求的config做处理
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config)
      }

      // 1.判断是否需要显示 loading
      if (config.showLoading === false) {
        this.showLoading = config.showLoading
      }
      this.instance
        .request<any, T>(config)
        .then((resp) => {
          if (config.interceptors?.responseInterceptor) {
            resp = config.interceptors.responseInterceptor(resp)
          }
          // 2.每次请求结束前将请求实例中的 showLoading 重置回默认值，不影响下一次请求
          this.showLoading = DEFAULT_LOADING
          // 3.将结果resolve出去
          resolve(resp)
        })
        .catch((error) => {
          // 2.每次请求结束前将请求实例中的 showLoading 重置回默认值，不影响下一次请求
          this.showLoading = DEFAULT_LOADING
          // 3.将异常reject出去
          reject(error)
          return error
        })
    })
  }

  get<T>(config: CoRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'GET' })
  }
  post<T>(config: CoRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'POST' })
  }
  delete<T>(config: CoRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'DELETE' })
  }
  patch<T>(config: CoRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'PATCH' })
  }

  // request(config: AxiosRequestConfig): void {
  //   this.instance.request(config).then((resp) => {
  //     console.log(resp)
  //   })
  // }
}

export default CoRequest
