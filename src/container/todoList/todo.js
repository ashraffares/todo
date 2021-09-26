/* eslint-disable no-console */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodoData } from '../../Redux/Actions/TodoActions';

const Todo = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchTodoData());
  }, []);

  console.log(state);
  return (
    <div className="App">
      working
    </div>
  );
};

export default Todo;