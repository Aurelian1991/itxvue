import Vue from 'vue'
import axios from 'axios'
import store from '@/store'

// import * as types from './store/types'
import router from '@/router'

// axios 配置
axios.defaults.timeout = 5000;
axios.defaults.baseURL = 'http://123.207.49.31/api/';
axios.defaults.autofaceURL = 'http://123.207.49.31/api/';





// http request 拦截器
axios.interceptors.request.use(
  config => {
    if (store.state.token) {
      config.headers.Authorization = `token ${store.state.token}`;
    }
    return config;
  },
  err => {
    return Promise.reject(err);
  });

// http response 拦截器
axios.interceptors.response.use(


  response => {
    console.log(response.headers);

    var token = response.headers.authorization
    if (token) {
      console.log(32124214);
      // 如果 header 中存在 token，那么触发 refreshToken 方法，替换本地的 token
      this.$store.dispatch('refreshToken', token)
    }
    var token = response.headers.authorization
    if (token) {
      // 如果 header 中存在 token，那么触发 refreshToken 方法，替换本地的 token
      this.$store.dispatch('refreshToken', token)
    }

    return response;
  },
  error => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          // 401 清除token信息并跳转到登录页面
          return this.$store.dispatch('logout')
          break
        case 400:
          //错误提示
          return
          break
        case 500:
          //服务器内部错误
          brake;
      }
    }
    // console.log(JSON.stringify(error));//console : Error: Request failed with status code 402
    return Promise.reject(error.response.data)
  });

export default axios;
