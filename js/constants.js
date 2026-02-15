export const HASH = '8cec9571964bc335350d833a3e847d5186b56c9cfb1cec3445587b7bdc2a78';
export const MAIN_LANG = 'de';
export const MAIN_PAGE = 'home';
export const ERROR_PAGE = '404';
export const AUTH_PAGE = 'auth';
export const PRIVACY_PAGE = 'privacy';
export const LEGAL_PAGE = 'legal';
export const AUTH_KEY = 'isAuth';
export const LANG_KEY = 'lang';
export const PROTECTED_PAGES = [
    //'home',
    //'resume',
    //'contacts',
    'projects',
    //'privacy',
    //'legal'
];
export const HIDDEN_PAGES = [
    //MAIN_PAGE,
    PRIVACY_PAGE,
    LEGAL_PAGE,
    ERROR_PAGE
];
export const ROUTES = {
  de: {
    home: '',
    resume: 'lebenslauf',
    contacts: 'kontakte',
    projects: 'projekte',
    privacy: 'datenschutz',
    legal: 'impressum'
  },
  en: {
    home: '',
    resume: 'resume',
    contacts: 'contacts',
    projects: 'projects',
    privacy: 'privacy',
    legal: 'legal'
  },
  ru: {
    home: '',
    resume: 'resume',
    contacts: 'kontakty',
    projects: 'proekty',
    privacy: 'privacy',
    legal: 'legal'
  }
};