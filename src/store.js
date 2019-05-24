import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: null,
    dialogVisible: false,
    message: null,
    username: null
  },
  mutations: {
    message(state, msg) {
      state.message = msg
    },
    get_token(state, res) {
      localStorage.accessToken = `Bearer ${res}`
    },
    changeDialog(state, data) {
      state.dialogVisible = data
    }
  }
})
