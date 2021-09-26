/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './todo.module.css';

const Todo = ({ todo }) => {
  const { id, title, created_by } = todo;
  return (
    <div className={styles.card}>
      <div className={styles.info}>
        <span>{ id }</span>
        <input value={title} disabled />
        <input value={created_by} disabled />
      </div>
      <div className={styles.buttons}>
        <button type="button">View</button>
        <button type="button">Edit</button>
        <button type="button">Delete</button>
        <button type="button">Save</button>
      </div>

    </div>
  );
};

Todo.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    created_by: PropTypes.string.isRequired,
  }).isRequired,
};

export default Todo;
