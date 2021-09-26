/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
import React from 'react';
import styles from './todo.module.css';

const Todo = ({ todo }) => {
  const { id, title, created_by } = todo;
  return (
    <div className={styles.card}>
      <h3>{ id }</h3>
      <h3>{ title }</h3>
      <h3>{ created_by }</h3>
    </div>
  );
};

export default Todo;
