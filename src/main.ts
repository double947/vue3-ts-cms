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
  method: 'GET'
})
