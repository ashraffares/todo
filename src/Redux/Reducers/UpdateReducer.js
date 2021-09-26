import ActionTypes from '../Actions/ActionTypes';

const initialStatePost = {
  message: null,
  loading: false,
  error: null,
};

const UpdateTodoReducer = (state = initialStatePost, action) => {
  switch (action.type) {
    case ActionTypes.UPDATE_TODO_LOADING:
      return {
        ...state,
        loading: true,
      };
    case ActionTypes.UPDATE_TODO_SUCCESS:
      return {
        ...state,
        message: action.payload,
        loading: true,
      };
    case ActionTypes.UPDATE_TODO_FAILURE:
      return {
        ...state,
        error: action.error,
      };
    default: return state;
  }
};

export default UpdateTodoReducer;
