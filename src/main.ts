import { createApp } from 'vue'
import 'element-plus/theme-chalk/base.css'
// import 'element-plus/dist/index.css'
/**
 * 官方插件Bug
 * 按需引入用了插件unplugin-vue-components 以service方式调用组件样式未引入
 * 手动引入Elmessage和Elloading的css样式文件
 */
import 'element-plus/theme-chalk/el-loading.css'
import 'element-plus/theme-chalk/el-message.css'

import App from './App.vue'
import router from './router'
import store from './store'
// import { registerApp } from './global'
import coRequest from '@/service'

const app = createApp(App)

// registerApp(app)
app.use(router)
app.use(store)
app.mount('#app')

console.log(process.env.NODE_ENV)
console.log(process.env.VUE_APP_BASE_API)

coRequest.request({
  url: '/home/multidata',
  method: 'GET',
  interceptors: {
    requestInterceptor: (config) => {
      console.log('单独请求的请求拦截器')
      return config
    },
    responseInterceptor: (res) => {
      console.log('单独请求的响应拦截器')
      return res
    }
  }
})

// coRequest.request({
//   url: '/home/multidata',
//   method: 'GET'
// })
