import { setLocale } from 'shared/reducers/locale';

export const languages: any = {
  'zh-cn': { name: '中文（简体）' },
};

export const locales = Object.keys(languages).sort();

export const registerLocale = (store:any) => {
  store.dispatch(setLocale(sessionStorage.getItem('locale')));
};
