import logo from './extensions/logo-won.svg'
import logoWithoutLabel from './extensions/logo-without-label.svg'
import favicon from './extensions/favicon.png'

const config = {
  auth: {
    logo
  },
  menu: {
    logo: logoWithoutLabel
  },
  head: {
    favicon
  },
  tutorials: false,
  translations: {
    en: {
      'app.components.LeftMenu.navbrand.title': 'Won Games',
    }
  },
  locales: [
    // 'ar',
    // 'fr',
    // 'cs',
    // 'de',
    // 'dk',
    // 'es',
    // 'he',
    // 'id',
    // 'it',
    // 'ja',
    // 'ko',
    // 'ms',
    // 'nl',
    // 'no',
    // 'pl',
    // 'pt-BR',
    // 'pt',
    // 'ru',
    // 'sk',
    // 'sv',
    // 'th',
    // 'tr',
    // 'uk',
    // 'vi',
    // 'zh-Hans',
    // 'zh',
  ],
};

const bootstrap = (app) => {
  console.log(app);
};

export default {
  config,
  bootstrap,
};
