import axios from 'axios';
import ActionTypes from './ActionTypes';

const token = JSON.stringify(localStorage.getItem('token'));

export const fetchTodoData = () => async (dispatch) => {
  dispatch({ type: ActionTypes.FETCH_TODO_LOADING });

  try {
    const response = await axios.get('https://vast-eyrie-23535.herokuapp.com/api/v1/todos',
      {
        headers: {
          'Content-Type': 'application/json',
          token,
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
      url: 'https://vast-eyrie-23535.herokuapp.com/api/v1/todos',
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
      url: `https://vast-eyrie-23535.herokuapp.com/api/v1/todos/${id}`,
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
      url: `https://vast-eyrie-23535.herokuapp.com/api/v1/todos/${id}`,
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
      url: `https://vast-eyrie-23535.herokuapp.com/api/v1/todos/${id}`,
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

export const GetItems = (id) => async (dispatch) => {
  dispatch({ type: ActionTypes.GET_ITEMS_LOADING });

  try {
    const response = await axios({
      method: 'get',
      url: `https://vast-eyrie-23535.herokuapp.com/api/v1/todos/${id}/items`,
      headers: {
        'Content-Type': 'application/json',
        token: 'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxfQ.DiPWrOKsx3sPeVClrm_j07XNdSYHgBa3Qctosdxax3w',
      },
    });
    dispatch({ type: ActionTypes.GET_ITEMS_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: ActionTypes.GET_ITEMS_FAILURE, error });
  }
};

export const PostItems = (id, obj) => async (dispatch) => {
  dispatch({ type: ActionTypes.POST_ITEMS_LOADING });

  try {
    const response = await axios({
      method: 'post',
      url: `https://vast-eyrie-23535.herokuapp.com/api/v1/todos/${id}/items`,
      headers: {
        'Content-Type': 'application/json',
        token: 'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxfQ.DiPWrOKsx3sPeVClrm_j07XNdSYHgBa3Qctosdxax3w',
      },
      data: obj,
    });
    dispatch({ type: ActionTypes.POST_ITEMS_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: ActionTypes.POST_ITEMS_FAILURE, error });
  }
};

export const UpdateItem = (todoId, itemId, obj) => async (dispatch) => {
  dispatch({ type: ActionTypes.UPDATE_ITEMS_LOADING });

  try {
    const response = await axios({
      method: 'put',
      url: `https://vast-eyrie-23535.herokuapp.com/api/v1/todos/${todoId}/items/${itemId}`,
      headers: {
        'Content-Type': 'application/json',
        token: 'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxfQ.DiPWrOKsx3sPeVClrm_j07XNdSYHgBa3Qctosdxax3w',
      },
      data: obj,
    });
    dispatch({ type: ActionTypes.UPDATE_ITEMS_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: ActionTypes.UPDATE_ITEMS_FAILURE, error });
  }
};

export const DeleteItem = (todoId, itemId) => async (dispatch) => {
  dispatch({ type: ActionTypes.DELETE_ITEMS_LOADING });

  try {
    const response = await axios({
      method: 'delete',
      url: `https://vast-eyrie-23535.herokuapp.com/api/v1/todos/${todoId}/items/${itemId}`,
      headers: {
        'Content-Type': 'application/json',
        token: 'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxfQ.DiPWrOKsx3sPeVClrm_j07XNdSYHgBa3Qctosdxax3w',
      },
    });
    dispatch({ type: ActionTypes.DELETE_ITEMS_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: ActionTypes.DELETE_ITEMS_FAILURE, error });
  }
};

export const RegisterUser = (obj) => async (dispatch) => {
  dispatch({ type: ActionTypes.REGISTER_USER_LOADING });

  try {
    const response = await axios({
      method: 'post',
      url: 'https://vast-eyrie-23535.herokuapp.com/api/v1/registeration',
      headers: {
        'Content-Type': 'application/json',
      },
      data: obj,
    });
    dispatch({ type: ActionTypes.REGISTER_USER_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: ActionTypes.REGISTER_USER_FAILURE, error });
  }
};

export const LoginUser = (obj) => async (dispatch) => {
  dispatch({ type: ActionTypes.LOGIN_USER_LOADING });

  try {
    const response = await axios({
      method: 'post',
      url: 'https://vast-eyrie-23535.herokuapp.com/api/v1/login',
      headers: {
        'Content-Type': 'application/json',
      },
      data: obj,
    });
    dispatch({ type: ActionTypes.LOGIN_USER_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: ActionTypes.LOGIN_USER_FAILURE, error: error.response.data.error });
  }
};
