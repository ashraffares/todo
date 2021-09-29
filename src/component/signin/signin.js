/* eslint-disable no-console */
/* eslint-disable camelcase */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { LoginUser } from '../../Redux/Actions/TodoActions';
import { authenticateUser } from '../../helper/authenticateUser';
import styles from './signin.module.css';

const SignIn = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const obj = {
    email,
    password,
  };

  const TrySignIn = (e) => {
    e.preventDefault();
    dispatch(LoginUser(obj)).then(() => {
      const res = authenticateUser('LOGIN');
      if (Number.isInteger(res)) {
        history.push(`/todos/${res}`);
      } else {
        const error = document.getElementById('error');
        error.textContent = res;
        setTimeout(() => {
          error.textContent = '';
        }, 5000);
      }
    });
  };

  return (
    <div className={styles.signIn}>
      <div id="error" />
      <form
        className={styles.form}
        onSubmit={(e) => TrySignIn(e)}
      >
        <div>
          <h1>Sign in</h1>
          <p>Hello there! Sign in and start managing you Todos</p>
        </div>
        <div>
          <input className={styles.input} type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>

        <div>
          <input className={`${styles.input} ${styles.orange}`} type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button className={styles.btn} type="submit">Submit</button>
      </form>
      <div className={styles.linkcon}>
        <Link className={styles.link} to="/sign_up">Sign Up</Link>
      </div>
    </div>
  );
};

export default SignIn;
