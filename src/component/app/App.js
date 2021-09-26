/* eslint-disable no-console */
import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Todo from '../../container/todoList/todo';
import Navbar from '../navbar';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/" exact component={Todo} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
