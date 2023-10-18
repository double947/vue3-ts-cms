import { RouteRecordRaw } from 'vue-router'

export function mapMenuToRouter(userMenus: any[]): RouteRecordRaw[] {
  const routes: RouteRecordRaw[] = []
  // 加载本地所有路由
  const localRoutes: RouteRecordRaw[] = []
  const routeFiles = require.context('@/router/main', true, /\.ts$/)
  routeFiles.keys().forEach((key) => {
    const route = require('@/router/main' + key.split('.')[1])
    localRoutes.push(route.default)
  })

  // 根据用户菜单权限动态注册路由 递归
  const _recurseRoute = (menus: any[]) => {
    for (const menu of menus) {
      if (menu.type === 2) {
        const route = localRoutes.find((item) => item.path === menu.url)
        if (route) {
          routes.push(route)
        }
      } else {
        _recurseRoute(menu.children)
      }
    }
  }

  _recurseRoute(userMenus)

  return routes
}
