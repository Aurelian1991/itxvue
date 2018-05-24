import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/page/home/Home'
import Login from '@/page/user/login'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: Home
    },
     {
       path: '/home',
       name: '首页',
       component: Home
     },
     {
        path: '/user/login',
          name: '登陆',
          component: Login


     }


  ]
})
