import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './signin.module.css';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className={styles.signIn}>
      <form className={styles.form}>
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
