/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
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

Todo.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    created_by: PropTypes.string.isRequired,
  }).isRequired,
};

export default Todo;
