import { combineReducers } from 'redux';

import home, { HomeState } from 'modules/home/home.reducer';
import locale, { LocaleState } from './locale';

export interface IRootState {
  readonly locale: LocaleState
  readonly home: HomeState
}

const rootReducer = combineReducers<IRootState>({
  locale,
  home,
});

export default rootReducer;
