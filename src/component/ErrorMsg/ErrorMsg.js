/* eslint-disable react/prop-types */
import React from 'react';
import styles from './ErrorMsg.module.css';

const ErrorMsg = ({ msg }) => (
  <div className={styles.wrapper}>
    <h3 className={styles.msg}>{ msg }</h3>
    <button className={styles.btn} type="button" onClick={(e) => e.target.parentElement.remove()}>X</button>
  </div>
);

export default ErrorMsg;
