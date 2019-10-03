// Font Icon
import '@mdi/font/css/materialdesignicons.css';

// Original Icon
import MyIconApp from '../components/BaseIconApplication.vue';
import MyIconData from '../components/BaseIconData.vue';

// Color
import colors from '../assets/variables.scss';

export const vuetifySettings = {
  theme: {
    themes: {
      light: {
        secondary: colors.secondary,
        accent: colors.accent,
        success: colors.success,
        info: colors.info,
        warning: colors.warning,
        error: colors.error,
      },
      dark: {
        secondary: colors.secondary,
        accent: colors.accent,
        success: colors.success,
        info: colors.info,
        warning: colors.warning,
        error: colors.error,
      },
    },
  },
  options: {
    customProperties: true,
  },
  iconfont: 'mdi',
  icons: {
    MyIconApp: {
      component: MyIconApp,
    },
    MyIconData: {
      component: MyIconData,
    },
  },
};
