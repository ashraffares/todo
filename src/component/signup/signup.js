/* eslint-disable no-console */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { RegisterUser } from '../../Redux/Actions/TodoActions';
import { authenticateUser } from '../../helper/authenticateUser';
import styles from './signup.module.css';

const Signup = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  const obj = {
    email,
    password,
    password_confirmation: passwordConfirmation,
  };

  const TrySignUp = (e) => {
    e.preventDefault();
    dispatch(RegisterUser(obj)).then(() => {
      const res = authenticateUser('REGISTER');
      if (Number.isInteger(res)) {
        history.push(`/user/${res}/todos`);
      } else {
        const errorsContainer = document.getElementById('error');
        const btn = document.createElement('button');
        btn.innerHTML = 'X';
        btn.classList.add(`${styles.errorBtn}`);
        btn.addEventListener('click', (e) => {
          e.target.parentElement.textContent = '';
        });
        errorsContainer.append(btn);
        return res.map((error) => {
          const div = document.createElement('div');
          div.textContent = error;
          div.classList.add(`${styles.error}`);
          errorsContainer.append(div);
          return true;
        });
      }
      return true;
    });
  };

  return (
    <div className={styles.formWrapper}>
      <div id="error" className={styles.errorsConatiner} />
      <form
        className={styles.form}
        onSubmit={(e) => TrySignUp(e)}
      >
        <div className={styles.header}>
          <h1>Sign Up</h1>
          <p>Hello there! Sign Up and start managing you Todos</p>
        </div>
        <div>
          <input className={styles.inputs} type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <input className={`${styles.inputs} ${styles.password}`} type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div>
          <input className={`${styles.inputs} ${styles.password}`} type="password" placeholder="Password_confirmation" value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)} />
        </div>
        <div>
          <button className={styles.btn} type="submit">Submit</button>
        </div>
      </form>
      <div className={styles.linkcon}>
        <Link className={styles.link} to="/sign_in">Sign In</Link>
      </div>
    </div>
  );
};

export default Signup;
