import { REQUEST, SUCCESS, FAILURE } from 'shared/util/action-type.util';

export const ACTION_TYPES = {
  LOGIN: 'authentication/LOGIN',
  GET_SESSION: 'authentication/GET_SESSION',
  CLEAR_AUTH: 'authentication/CLEAR_AUTH',
};

const initialState = {
  loading: false,
  isAuthenticated: false,
  loginSuccess: false,
  loginError: false,
  sessionHasBeenFetched: false,
  account: [],
};

export type AuthenticationState = Readonly<typeof initialState>;

// Reducer

export default (state: AuthenticationState = initialState, action): AuthenticationState => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.LOGIN):
      return {
        ...state,
        loading: true,
        loginSuccess: false,
        loginError: false,
      };
    case SUCCESS(ACTION_TYPES.LOGIN):
      return {
        ...state,
        isAuthenticated: true,
        sessionHasBeenFetched: true,
        loading: false,
        loginError: false,
        loginSuccess: true,
        account: action.payload.data.map((o) => o.authority),
      };
    case FAILURE(ACTION_TYPES.LOGIN):
      return {
        ...initialState,
        loginError: true,
      };
    case REQUEST(ACTION_TYPES.GET_SESSION):
      return {
        ...state,
        loading: true,
      };
    case SUCCESS(ACTION_TYPES.GET_SESSION):
      if (action.payload.data.length > 0) {
        return {
          ...state,
          isAuthenticated: true,
          sessionHasBeenFetched: true,
          loading: false,
          account: action.payload.data,
        };
      }
      return {
        ...state, isAuthenticated: false, sessionHasBeenFetched: true, loading: false,
      };
    case FAILURE(ACTION_TYPES.GET_SESSION):
      return {
        ...initialState,
        sessionHasBeenFetched: true,
      };
    case ACTION_TYPES.CLEAR_AUTH:
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
        account: [],
      };
    default:
      return state;
  }
};
