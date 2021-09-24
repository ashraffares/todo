import axios from 'axios';
import ActionTypes from './ActionTypes';

const fetchTodoData = () => async (dispatch) => {
  dispatch({ type: ActionTypes.FETCH_TODO_LOADING });
};

export default fetchTodoData;
