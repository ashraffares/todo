/* eslint-disable no-console */
import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Todos from '../../container/todoList/todos';
import Navbar from '../navbar';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/" exact component={Todos} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
