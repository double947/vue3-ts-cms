import type { AxiosRequestConfig, AxiosResponse } from 'axios'

interface CoRequestInterceptor {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (resp: AxiosResponse) => AxiosResponse
  responseInterceptorCatch?: (error: any) => any
}
// 利用 继承思想 对原始的 AxiosRequestConfig 做扩展加入 interceptors 等属性
interface CoRequestConfig extends AxiosRequestConfig {
  // 写成可选链提高代码可扩展性
  interceptors?: CoRequestInterceptor
}

export { CoRequestInterceptor, CoRequestConfig }
