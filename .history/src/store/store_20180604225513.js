import Vuex from 'vuex'
import Vue from 'vue'
import axios from 'axios'

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
    //登录成功
    profile(state, data) {
      state.user.name = data.name
      state.user.mobile = data.mobile
      state.user.avatar = data.avatar
    },
    logout(state) {
      state.user.name = null
      state.user.mobile = null
      state.user.avatar = null
      state.auth = false
      state.token = null
      localStorage.removeItem('token')
    },
  },
  actions: {
    logined({
      dispatch,
      commit
    }, token) {
      return new Promise(function (resolve, reject) {
        commit('logined', token)
        axios.defaults.headers.common['Authorization'] = token
        dispatch('profile').then(() => {
          resolve()
        }).catch(() => {
          reject()
        })
      })
    },

  }
})
