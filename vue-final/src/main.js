import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import router from './router';
Vue.use(VueRouter)
Vue.config.productionTip = false

import $ from 'jquery';
window.jQuery = $;
window.$ = $;





new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')
