import { Module } from 'vuex'
import { ILoginState } from './type'
import { IRootState } from '../type'
import { accountLogin } from '@/service/login/login'

const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: {}
    }
  },
  getters: {},
  mutations: {},
  actions: {
    async accountLoginAction({ commit }, payload: any) {
      // console.log('触发 accountLoginAction', payload)
      const accountLoginResp = await accountLogin(payload)
      console.log('accountLoginResp: ', accountLoginResp)
    },
    phoneLoginAction({ commit }, payload: any) {
      console.log('触发 phoneLoginAction', payload)
    }
  }
}

export default loginModule
