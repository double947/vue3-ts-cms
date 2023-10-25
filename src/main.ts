import { createApp } from 'vue'
import 'element-plus/theme-chalk/base.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
// import 'element-plus/dist/index.css'
/**
 * 官方插件Bug
 * 按需引入用了插件unplugin-vue-components 以service方式调用组件样式未引入
 * 手动引入Elmessage和Elloading的css样式文件
 */
import 'element-plus/theme-chalk/el-loading.css'
import 'element-plus/theme-chalk/el-message.css'
import 'normalize.css'
// import 'tailwindcss/tailwind.css'
import '@/assets/css/tailwind.css'

import '@/assets/css/index.less'
import App from './App.vue'
import router from './router'
import store from './store'
import { setupStore } from './store'
// import { registerApp } from './global'

const app = createApp(App)

// registerApp(app)
app.use(store)
// 先setupStore 等路由都注册完，再去use(router)，
// 否则会出现刷新时由于代码执行顺序导致路由还未注册完匹配不到（匹配到not-found）的情况
setupStore()
app.use(router)
app.mount('#app')

// 全局注册element-plus图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
