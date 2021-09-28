import React, { useState } from 'react';
import styles from './signup.module.css';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  return (
    <div className={styles.formWrapper}>
      <form className={styles.form}>
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
    </div>
  );
};

export default Signup;
