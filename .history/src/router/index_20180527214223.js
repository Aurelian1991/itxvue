import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/page/home/Home'
import Login from '@/page/user/login'
import Register from '@/page/user/register'
import HomeIndex from '@/page/index'


Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'HelloWorld',
      redirect: '/home',
    },
    {
      path: '/index',
      name: '首页',
      component: HomeIndex,
      children: [{
        path: '/home',
        name: '首页',
        component: Home
      }]
    },
    {
      path: '/login',
      name: '登陆',
      component: Login
    },
    {
      path: '/register',
      name: '登陆',
      component: Register
    },
    {
      path: '/user',
      name: "个人中心"
    }



  ]
})
