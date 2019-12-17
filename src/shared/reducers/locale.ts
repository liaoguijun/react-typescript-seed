export const ACTION_TYPES = {
  SET_LOCALE: 'locale/SET_LOCALE',
};

const initialState = {
  currentLocale: undefined,
};

export type LocaleState = Readonly<typeof initialState>;

export default (state: LocaleState = initialState, action: any): LocaleState => {
  switch (action.type) {
    case ACTION_TYPES.SET_LOCALE: {
      const currentLocale = action.locale;
      if (state.currentLocale !== currentLocale) {
        sessionStorage.setItem('locale', currentLocale);
      }
      return {
        currentLocale,
      };
    }
    default:
      return state;
  }
};

export const setLocale = (locale:any) => async (dispatch:any) => {
  dispatch({
    type: ACTION_TYPES.SET_LOCALE,
    locale,
  });
};
