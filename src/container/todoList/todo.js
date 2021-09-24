/* eslint-disable no-console */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fetchTodoData from '../../Redux/Actions/TodoActions';

const Todo = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchTodoData());
  }, []);

  if (state.TodoReducer.items.length > 0) {
    console.log(state.TodoReducer.items);
  }
  console.log(state);
  return (
    <div className="App">
      working
    </div>
  );
};

export default Todo;
