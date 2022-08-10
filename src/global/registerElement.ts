import { App } from 'vue'
import 'element-plus/theme-chalk/base.css'
// import 'element-plus/es/components/base/style/css'
import { ElButton } from 'element-plus/lib/index'

const components = [ElButton]

export default function (app: App): void {
  for (const cpn of components) {
    app.component(cpn.name, cpn)
  }
}
