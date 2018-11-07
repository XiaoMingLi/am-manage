// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index'
import store from './store'
import axios from './provider/intercept'

import iView from 'iview';
import 'iview/dist/styles/iview.css';

import 'common/scss/index.scss'

Vue.use(iView, {
  transfer: true,
  size: 'large'
});

Vue.config.productionTip = false;
// Vue.prototype.$http = axios;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  axios,
  router,
  store,
  render: h => h(App)
})
