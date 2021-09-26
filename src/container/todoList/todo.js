/* eslint-disable no-console */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetTodo } from '../../Redux/Actions/TodoActions';

const Todo = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  useEffect(() => {
    dispatch(GetTodo(5));
  }, []);

  console.log('#################');
  console.log(state);
  console.log('###############');
  return (
    <div className="App">
      working
    </div>
  );
};

export default Todo;
