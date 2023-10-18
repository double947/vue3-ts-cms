import { Module } from 'vuex'
import type { ILoginState } from './type'
import type { IRootState } from '../type'
import type { IAccount } from '@/service/login/type'
import {
  accountLogin,
  queryUserInfoById,
  queryUserMenuByRoleId
} from '@/service/login/login'
import localCache from '@/utils/cache'
import { mapMenuToRouter } from '@/utils/mapMenuToRouter'
import router from '@/router'

const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: {},
      userMenus: []
    }
  },
  getters: {},
  mutations: {
    setToken(state, token: string) {
      state.token = token
    },
    setUserInfo(state, userInfo: any) {
      state.userInfo = userInfo
    },
    setUserMenus(state, userMenus: any) {
      state.userMenus = userMenus
      // 根据菜单映射路由
      const routes = mapMenuToRouter(state.userMenus)
      routes.forEach((item) => {
        router.addRoute('main', item)
      })
    }
  },
  actions: {
    async accountLoginAction({ commit }, payload: IAccount) {
      // console.log('触发 accountLoginAction', payload)
      // 1.用户登录
      const accountLoginResp = await accountLogin(payload)
      const { id, token } = accountLoginResp.data
      commit('setToken', token)
      localCache.setCache('token', token)
      // 2.获取用户信息
      const userInfoResp = await queryUserInfoById(id)
      const userInfo = userInfoResp.data
      commit('setUserInfo', userInfo)
      localCache.setCache('userInfo', userInfo)
      // 3.获取用菜单树
      const roleMenuTreeResp = await queryUserMenuByRoleId(userInfo.role.id)
      const userMenus = roleMenuTreeResp.data
      commit('setUserMenus', userMenus)
      localCache.setCache('userMenus', userMenus)
      // 4.登录成功跳转首页
      router.push({ path: '/main' })
    },
    loadLoginStore({ commit }) {
      const token = localCache.getCache('token')
      if (token) {
        commit('setToken', token)
      }
      const userInfo = localCache.getCache('userInfo')
      if (token) {
        commit('setUserInfo', userInfo)
      }
      const userMenus = localCache.getCache('userMenus')
      if (userMenus) {
        commit('setUserMenus', userMenus)
      }
    }
    // phoneLoginAction({ commit }, payload: any) {
    //   console.log('触发 phoneLoginAction', payload)
    // }
  }
}

export default loginModule
