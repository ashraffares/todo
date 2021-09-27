/* eslint-disable camelcase */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { DeleteTodo, UpdateTodo } from '../../Redux/Actions/TodoActions';
import styles from './todo.module.css';

const Todo = ({ todo }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { id, title, created_by } = todo;
  const [Title, setTitle] = useState(title);
  const [CreatedBy, setcreatedBy] = useState(created_by);
  const EditItems = () => {
    const inputs = document.getElementsByClassName(id);
    inputs[0].disabled = false;
    inputs[1].disabled = false;
  };

  return (
    <div className={styles.card}>
      <div className={styles.info}>
        <span>{ id }</span>
        <input className={id} value={Title} disabled onChange={(e) => setTitle(e.target.value)} />
        <input
          className={id}
          value={CreatedBy}
          disabled
          onChange={(e) => setcreatedBy(e.target.value)}
        />
      </div>
      <div className={styles.buttons}>
        <button type="button" onClick={() => history.push(`todo/${id}/items`)}>View</button>
        <button type="button" onClick={() => EditItems()}>Edit</button>
        <button type="button" onClick={() => dispatch(DeleteTodo(id))}>Delete</button>
        <button type="button" onClick={() => dispatch(UpdateTodo(id, { title: Title, created_by: CreatedBy }))}>Save</button>
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
