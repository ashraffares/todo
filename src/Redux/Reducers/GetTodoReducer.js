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
        item: [...state.items, ...action.payload],
        loading: false,
      };
    case ActionTypes.GET_TODO_FAILURE:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    default: return state;
  }
};

export default GetTodoReducer;
