// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from './utils/http'
import VueAxios from 'vue-axios'
import store from './store'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
import 'muse-ui/dist/theme-carbon.css' // 使用 carbon 主题
import querystring from 'querystring'
import VueLazyload from 'vue-lazyload'
import VueCarousel from 'vue-carousel';

Vue.use(MuseUI)
Vue.use(VueAxios, axios)
Vue.use(VueCarousel);
Vue.use(VueLazyload,{
  loading: 'http://image.heitem.com/timg.gif'
})

Vue.config.productionTip = false
Vue.prototype.$qs = querystring;



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})
