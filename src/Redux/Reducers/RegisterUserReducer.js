import ActionTypes from '../Actions/ActionTypes';

const initialState = {
  token: {},
  loading: false,
  error: null,
};

const RegisterUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.REGISTER_USER_LOADING:
      return {
        ...state,
        loading: true,
      };
    case ActionTypes.REGISTER_USER_SUCCESS:
      return {
        ...state,
        token: action.payload,
        loading: false,
      };
    case ActionTypes.REGISTER_USER_FAILURE:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    default: return state;
  }
};

export default RegisterUserReducer;
