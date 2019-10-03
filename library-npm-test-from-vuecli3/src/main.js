import Vue from 'vue';
import App from './App.vue';
import store from './store';
import i18n from './plugins/i18n';
import vuetify from './plugins/vuetify';
// import axios from './plugins/axios';
import veeValidate from './plugins/vee-validate.js';
import axios from 'axios';

Vue.config.productionTip = false;
Vue.prototype.$axios = axios;

new Vue({
  store,
  i18n,
  vuetify,
  veeValidate,
  render: (h) => h(App),
}).$mount('#app');
