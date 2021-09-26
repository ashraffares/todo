/* eslint-disable no-console */
import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Todos from '../../container/todoList/todos';
import Navbar from '../navbar';
import Form from '../form';
import Items from '../../container/itemsList/items';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Form />
      <Switch>
        <Route path="/" exact component={Todos} />
        <Route path="/todo/:id/items" exact component={Items} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
