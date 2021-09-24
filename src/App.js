import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fetchTodoData from './Redux/Actions/TodoActions';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchTodoData);
  }, []);

  // eslint-disable-next-line no-console
  console.log(state);
  return (
    <div className="App">
      working
    </div>
  );
}

export default App;
