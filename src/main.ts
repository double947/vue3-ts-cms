import { createApp } from 'vue'
// import 'element-plus/theme-chalk/base.css'
// import 'element-plus/dist/index.css'
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
