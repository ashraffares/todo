/* eslint-disable no-console */
import axios from 'axios';
import ActionTypes from './actionTypes';

const fetchTodoData = () => async (dispatch) => {
  dispatch({ type: ActionTypes.FETCH_LOADING });
  try {
    const response = await axios.get('https://boiling-shelf-13431.herokuapp.com/api/v1/todos',
      {
        headers: {
          'Content-Type': 'application/json',
          token: 'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxfQ.DiPWrOKsx3sPeVClrm_j07XNdSYHgBa3Qctosdxax3w',
        },
      });
    dispatch({
      type: ActionTypes.FETCH_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: ActionTypes.FETCH_FAILURE,
      error,
    });
  }
};

export default fetchTodoData;
