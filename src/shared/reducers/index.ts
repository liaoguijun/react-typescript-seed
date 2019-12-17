import { combineReducers } from 'redux';

import locale, { LocaleState } from './locale';

export interface IRootState {
  readonly locale: LocaleState;
}

const rootReducer = combineReducers<IRootState>({
  locale,
});

export default rootReducer;
