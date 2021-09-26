import axios from 'axios';
import ActionTypes from './ActionTypes';

export const fetchTodoData = () => async (dispatch) => {
  dispatch({ type: ActionTypes.FETCH_TODO_LOADING });

  try {
    const response = await axios.get('https://boiling-shelf-13431.herokuapp.com/api/v1/todos',
      {
        headers: {
          'Content-Type': 'application/json',
          token: 'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxfQ.DiPWrOKsx3sPeVClrm_j07XNdSYHgBa3Qctosdxax3w',
        },
      });
    dispatch({ type: ActionTypes.FETCH_TODO_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: ActionTypes.FETCH_TODO_FAILURE, error });
  }
};

export const postTodo = (obj) => async (dispatch) => {
  dispatch({ type: ActionTypes.POST_TODO_LOADING });

  try {
    const response = await axios({
      method: 'post',
      url: 'https://boiling-shelf-13431.herokuapp.com/api/v1/todos',
      headers: {
        'Content-Type': 'application/json',
        token: 'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxfQ.DiPWrOKsx3sPeVClrm_j07XNdSYHgBa3Qctosdxax3w',
      },
      data: obj,
    });
    dispatch({ type: ActionTypes.POST_TODO_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: ActionTypes.POST_TODO_FAILURE, error });
  }
};

export const DeleteTodo = (id) => async (dispatch) => {
  dispatch({ type: ActionTypes.DELETE_TODO_LOADING });

  try {
    const response = await axios({
      method: 'delete',
      url: `https://boiling-shelf-13431.herokuapp.com/api/v1/todos/${id}`,
      headers: {
        'Content-Type': 'application/json',
        token: 'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxfQ.DiPWrOKsx3sPeVClrm_j07XNdSYHgBa3Qctosdxax3w',
      },
    });
    dispatch({ type: ActionTypes.DELETE_TODO_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: ActionTypes.DELETE_TODO_FAILURE, error });
  }
};

export const UpdateTodo = (id, obj) => async (dispatch) => {
  dispatch({ type: ActionTypes.UPDATE_TODO_LOADING });

  try {
    const response = await axios({
      method: 'put',
      url: `https://boiling-shelf-13431.herokuapp.com/api/v1/todos/${id}`,
      headers: {
        'Content-Type': 'application/json',
        token: 'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxfQ.DiPWrOKsx3sPeVClrm_j07XNdSYHgBa3Qctosdxax3w',
      },
      data: obj,
    });
    dispatch({ type: ActionTypes.UPDATE_TODO_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: ActionTypes.UPDATE_TODO_FAILURE, error });
  }
};

export const GetTodo = (id) => async (dispatch) => {
  dispatch({ type: ActionTypes.GET_TODO_LOADING });

  try {
    const response = await axios({
      method: 'get',
      url: `https://boiling-shelf-13431.herokuapp.com/api/v1/todos/${id}`,
      headers: {
        'Content-Type': 'application/json',
        token: 'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxfQ.DiPWrOKsx3sPeVClrm_j07XNdSYHgBa3Qctosdxax3w',
      },
    });
    dispatch({ type: ActionTypes.GET_TODO_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: ActionTypes.GET_TODO_FAILURE, error });
  }
};
