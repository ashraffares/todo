import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styles from './form.module.css';
import { postTodo } from '../../Redux/Actions/TodoActions';

const Form = () => {
  const dispatch = useDispatch();
  const [Title, SetTitle] = useState('');
  const [createdBy, SetcreatedBy] = useState('');
  const obj = {
    title: Title,
    created_by: createdBy,
    user_id: 1,
  };

  return (
    <div className={styles.wrapper}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(postTodo(obj));
          SetTitle('');
          SetcreatedBy('');
        }}
        className={styles.form}
      >
        <input type="text" placeholder="Todo Title" value={Title} onChange={(e) => SetTitle(e.target.value)} />
        <input type="text" placeholder="Creater by" value={createdBy} onChange={(e) => SetcreatedBy(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
