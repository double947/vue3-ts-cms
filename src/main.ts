import { createApp } from 'vue'
// import 'element-plus/theme-chalk/base.css'
// import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router'
import store from './store'
import { registerApp } from './global'

const app = createApp(App)

registerApp(app)
app.use(router)
app.use(store)
app.mount('#app')
