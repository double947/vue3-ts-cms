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
import 'basscss/css/basscss.min.css'

import '@/assets/css/index.less'
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

// 全局注册element-plus图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
