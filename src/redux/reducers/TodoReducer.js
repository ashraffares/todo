/* eslint-disable no-console */
import InitialState from '../store/initialState';
import ActionTypes from '../actions/actionTypes';

const TodoReducer = (state = InitialState, action) => {
  switch (action.types) {
    case ActionTypes.FETCH_LOADING:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case ActionTypes.FETCH_SUCCESS:
      return { items: action.payload, loading: false, error: null };

    case ActionTypes.FETCH_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default: return state;
  }
};

export default TodoReducer;
