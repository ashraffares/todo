import ActionTypes from '../Actions/ActionTypes';

const initialStatePost = {
  message: null,
  loading: false,
  error: null,
};

const DeleteTodoReducer = (state = initialStatePost, action) => {
  switch (action.type) {
    case ActionTypes.DELETE_TODO_LOADING:
      return {
        ...state,
        loading: true,
      };
    case ActionTypes.DELETE_TODO_SUCCESS:
      return {
        ...state,
        message: action.payload,
        loading: false,
      };
    case ActionTypes.DELETE_TODO_FAILURE:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    default: return state;
  }
};

export default DeleteTodoReducer;
