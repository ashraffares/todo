import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodoData } from '../../Redux/Actions/TodoActions';
import Todo from '../../component/todo';
import Form from '../form';

const Todos = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const { DeleteTodoReducer, UpdateTodoReducer, PostTodoReducer } = state;

  useEffect(() => {
    dispatch(fetchTodoData());
  }, [DeleteTodoReducer, UpdateTodoReducer, PostTodoReducer]);

  const renderData = () => {
    const { TodoReducer } = state;
    const { loading, items, error } = TodoReducer;
    const ItemsLen = items.length;
    if (loading) {
      return 'Loading data .............';
    }
    if (ItemsLen > 0) {
      return items.map((el) => <Todo key={el.id} todo={el} />);
    }

    return error;
  };

  return (
    <main>
      <Form />
      { renderData() }
    </main>
  );
};

export default Todos;
