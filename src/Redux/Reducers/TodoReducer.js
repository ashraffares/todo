import ActionTypes from '../Actions/ActionTypes';
import INITIAL_STATE from '../Store/InitialState';

const TodoReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_TODO_LOADING:
      return {
        ...state,
        loading: true,
      };
    case ActionTypes.FETCH_TODO_SUCCESS:
      return {
        ...state,
        items: action.payload,
        loading: false,
      };
    case ActionTypes.FETCH_TODO_FAILURE:
      return {
        ...state,
        error: action.error,
      };
    default: return state;
  }
};

export default TodoReducer;
