import ActionTypes from '../Actions/ActionTypes';

const initialState = {
  token: {},
  loading: false,
  error: null,
};

const LoginUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.LOGIN_USER_LOADING:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case ActionTypes.LOGIN_USER_SUCCESS:
      return {
        ...state,
        token: action.payload,
        loading: false,
        error: null,
      };
    case ActionTypes.LOGIN_USER_FAILURE:
      return {
        ...state,
        error: action.error,
        loading: false,
        token: {},
      };
    default: return state;
  }
};

export default LoginUserReducer;
