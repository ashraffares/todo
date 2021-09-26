import ActionTypes from '../Actions/ActionTypes';

const initialState = {
  message: null,
  loading: false,
  error: null,
};

const GetTodoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_TODO_LOADING:
      return {
        ...state,
        loading: true,
      };
    case ActionTypes.GET_TODO_SUCCESS:
      return {
        ...state,
        item: action.payload,
        loading: true,
      };
    case ActionTypes.GET_TODO_FAILURE:
      return {
        ...state,
        error: action.error,
      };
    default: return state;
  }
};

export default GetTodoReducer;
