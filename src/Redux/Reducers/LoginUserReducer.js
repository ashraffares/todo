import ActionTypes from '../Actions/ActionTypes';

const initialState = {
  token: {},
  loading: false,
  error: null,
};

const LoginUserReducedr = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.LOGIN_USER_LOADING:
      return {
        ...state,
        loading: true,
      };
    case ActionTypes.LOGIN_USER_SUCCESS:
      return {
        ...state,
        token: action.payload,
        loading: false,
      };
    case ActionTypes.LOGIN_USER_FAILURE:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    default: return state;
  }
};

export default LoginUserReducedr;
