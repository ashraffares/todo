import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from '../Navbar/navbar';
import Todo from '../../container/Todo';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/" component={Todo} exact />
      </Switch>
    </div>
  );
}

export default App;
