import Vue from 'vue';
import VueI18n from 'vue-i18n';

const defaultLocale = 'ja';

Vue.use(VueI18n);

export default new VueI18n({
  locale: defaultLocale,
  fallbackLocale: defaultLocale,
  messages: {
    'ja': require('@/locales/ja.json'),
    'en': require('@/locales/en.json'),
  },
});

