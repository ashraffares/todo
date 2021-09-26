/* eslint-disable no-console */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodoData, DeleteTodo } from '../../Redux/Actions/TodoActions';

const Todo = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  useEffect(() => {
    dispatch(DeleteTodo());
  }, []);

  useEffect(() => {
    dispatch(fetchTodoData());
  }, []);

  if (state.TodoReducer.items.length > 0) {
    console.log(state.TodoReducer.items);
  }
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
