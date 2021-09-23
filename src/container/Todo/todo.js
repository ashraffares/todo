/* eslint-disable no-console */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fetchTodoData from '../../redux/actions/TodoActions';

const Todo = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchTodoData());
  }, []);
  console.log(state);
  return <h1>hello world</h1>;
};

export default Todo;
