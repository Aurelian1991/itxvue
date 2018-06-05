import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import store from '@/store'
import Home from '@/page/home/Home'
import Login from '@/page/user/login'
import Register from '@/page/user/register'
import HomeIndex from '@/page/index'
import User from '@/page/user/index'



Vue.use(VueRouter)
const routes = [{
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
    name: "个人中心",
    component: User
  }
]
// if (window.localStorage.getItem('token')) {
//   store.commit(types.LOGIN, window.localStorage.getItem('token'))
// }
const router = new VueRouter({

  routes
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(r => r.meta.requireAuth)) {
    if (store.state.token) {
      next();
    } else {
      next({
        path: '/login',
        query: {
          redirect: to.fullPath
        }
      })
    }
  } else {
    next();
  }
})
export default router;
