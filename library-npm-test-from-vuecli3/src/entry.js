// Import vue components
import * as components from './components/index';
import store from './store';
import vuetify from './plugins/vuetify';
import axios from 'axios';
import i18n from './plugins/i18n';
import './plugins/vee-validate.js';
import veeValidate from './plugins/vee-validate.js';

/**
 * install function executed by Vue.use()
 *
 * @param {*} Vue
 * @param {*} options
 */
const install = function(Vue, options = {}) {
  if (install.installed) return;
  install.installed = true;
  // install component
  Object.keys(components).forEach((componentName) => {
    Vue.component(componentName, components[componentName]);
  });

  Vue.prototype.$add = (a, b) => {
    return a + b;
  };

  Vue.use(vuetify);
  Vue.use(store);
  Vue.prototype.$axios = axios;
  Vue.prototype.axios = axios;
  if (options.lang) {
    i18n.locale = options.lang;
  }
  Vue.use(i18n);
  Vue.use(veeValidate);
};

// Create module definition for Vue.use()
const plugin = {
  install,
};

// To auto-install when vue is found
/* global window global */
let GlobalVue = null;
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue;
}
if (GlobalVue) {
  GlobalVue.use(plugin);
}

// Default export is library as a whole, registered via Vue.use()
export default plugin;

// To allow individual component use, export components
// each can be registered via Vue.component()
export * from './components/index';
