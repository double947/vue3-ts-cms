import { createStore } from 'vuex'
import { IRootState } from './type'
import login from './login/login'

const store = createStore<IRootState>({
  state: () => {
    return {
      name: 'double'
    }
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    login
  }
})

export default store
