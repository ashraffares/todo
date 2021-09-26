/* eslint-disable camelcase */
import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { DeleteTodo } from '../../Redux/Actions/TodoActions';
import styles from './todo.module.css';

const Todo = ({ todo }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { id, title, created_by } = todo;
  return (
    <div className={styles.card}>
      <div className={styles.info}>
        <span>{ id }</span>
        <input value={title} disabled />
        <input value={created_by} disabled />
      </div>
      <div className={styles.buttons}>
        <button type="button" onClick={() => history.push(`todo/${id}/items`)}>View</button>
        <button type="button">Edit</button>
        <button type="button" onClick={() => dispatch(DeleteTodo(id))}>Delete</button>
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
