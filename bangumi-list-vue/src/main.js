// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueLazyLoad from 'vue-lazyload'

Vue.config.productionTip = false
Vue.prototype.axios = axios

Vue.use(VueLazyLoad, {
    preLoad: 1.3,
    error: './static/images/loaderror.png',
    loading: './static/images/lazyload.png',
    attempt: 1
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
