/* eslint-disable no-console */
/* eslint-disable camelcase */
import jwt_decode from 'jwt-decode';
import store from '../Redux/Store/store';

export const authenticateUser = (method) => {
  const { LoginUserReducer, RegisterUserReducer } = store.getState();
  let token;
  let error;
  if (method === 'LOGIN') {
    token = LoginUserReducer.token.token;
    error = LoginUserReducer.error;
  } else if (method === 'REGISTER') {
    token = RegisterUserReducer.token.token;
    error = RegisterUserReducer.error;
  }
  if (token) {
    const { user_id } = jwt_decode(token);
    localStorage.setItem('token', token);
    return user_id;
  }
  return error;
};

export const IsSignedIn = () => {
  const token = JSON.stringify(localStorage.getItem('token'));
  if (token) {
    const { user_id } = jwt_decode(token);
    return user_id;
  }
  return 'unauthorized action please sign in first!';
};
