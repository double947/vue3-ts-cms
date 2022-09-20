import { Module } from 'vuex'
import { ILoginState } from './type'
import { IRootState } from '../type'

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
    accountLoginAction({ commit }, payload: any) {
      console.log('触发 accountLoginAction', payload)
    },
    phoneLoginAction({ commit }, payload: any) {
      console.log('触发 phoneLoginAction', payload)
    }
  }
}

export default loginModule
