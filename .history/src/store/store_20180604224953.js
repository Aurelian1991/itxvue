import Vuex from 'vuex'
import Vue from 'vue'
// import * as types from './types'

Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    user: {
      nam: null,
      avatar: null,
      mobile: null,
    },
    token: null,
    title: '',
    auth: false
  },
  mutations: {
    logined(state, token) {
      state.auth = true
      state.token = token
      localStorage.token = token
    },
    refreshToken(state, token) {
      state.token = token
      localStorage.token = token
      axios.defaults.headers.common['Authorization'] = state.token
    },










    // [types.LOGIN]: (state, data) => {
    //   localStorage.token = data;
    //   state.token = data;
    // },
    // [types.LOGOUT]: (state) => {
    //   localStorage.removeItem('token');
    //   state.token = null
    // },
    // [types.TITLE]: (state, data) => {
    //   state.title = data;
    // }
  }
})
