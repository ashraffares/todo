import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Todos from '../../container/todoList/todos';
import Items from '../../container/itemsList/items';
import SignIn from '../signin';
import SignUp from '../signup';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.App}>
      <Switch>
        <Route path="/user/:id/todos/" exact component={Todos} />
        <Route path="/todo/:id/items/" exact component={Items} />
        <Route path="/" exact component={SignIn} />
        <Route path="/sign_up" exact component={SignUp} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
