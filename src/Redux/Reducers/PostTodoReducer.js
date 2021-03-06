import ActionTypes from '../Actions/ActionTypes';

const initialStatePost = {
  item: {},
  loading: false,
  error: null,
};

const PostTodoReducer = (state = initialStatePost, action) => {
  switch (action.type) {
    case ActionTypes.POST_TODO_LOADING:
      return {
        ...state,
        loading: true,
      };
    case ActionTypes.POST_TODO_SUCCESS:
      return {
        ...state,
        item: action.payload,
        loading: false,
      };
    case ActionTypes.POST_TODO_FAILURE:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    default: return state;
  }
};

export default PostTodoReducer;
