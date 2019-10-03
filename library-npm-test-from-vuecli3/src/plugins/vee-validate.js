import Vue from 'vue';
import VeeValidate from 'vee-validate';
import ja from 'vee-validate/dist/locale/ja';
import en from 'vee-validate/dist/locale/en';
import i18n from './i18n';

Vue.use(VeeValidate);

export default new VeeValidate({
  i18n,
  dictionary: {
    ja: ja,
    en: en,
  },
  inject: false,
  errorBagName: 'veeErrors',
  fieldsBagName: 'veeFields',
});
