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
      const roleMenus = roleMenuTreeResp.data
      commit('setUserMenus', roleMenus)
      localCache.setCache('userMenus', roleMenus)
    },
    phoneLoginAction({ commit }, payload: any) {
      console.log('触发 phoneLoginAction', payload)
    }
  }
}

export default loginModule
