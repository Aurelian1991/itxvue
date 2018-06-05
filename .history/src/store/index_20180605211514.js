import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

// import * as types from './types'

Vue.use(Vuex);

const store = new Vuex.Store({
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
    // 登录成功后使用 token 拉取用户的信息
    profile({
      commit
    }) {
      return new Promise(function (resolve, reject) {
        axios.get('/auth/user', {}).then(respond => {
          if (respond.status == 200) {
            commit('profile', respond.data)
            resolve()
          } else {
            reject()
          }
        })
      })
    },
    // 用户登出，清除本地数据并重定向至登录页面
    logout({
      commit
    }) {
      return new Promise(function (resolve, reject) {
        commit('logout')
        axios.post('auth/logout', {}).then(respond => {
          Vue.$router.push({
            name: 'login'
          })
        })
      })
    },
    // 将刷新的 token 保存至本地
    refreshToken({
      commit
    }, token) {
      return new Promise(function (resolve, reject) {
        commit('refreshToken', token)
      })
    },

  }
});
export default store;
