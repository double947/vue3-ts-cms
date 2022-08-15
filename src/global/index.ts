import { App } from 'vue'
import registerElement from './registerElement'

export function registerApp(app: App): void {
  app.use(registerElement)
}
