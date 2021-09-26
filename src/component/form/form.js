import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postTodo } from '../../Redux/Actions/TodoActions';

const Form = () => {
  const dispatch = useDispatch();
  const [Title, SetTitle] = useState('');
  const [createdBy, SetcreatedBy] = useState('');
  return (
    <form onSubmit={() => dispatch(postTodo({ title: Title, created_by: createdBy, user_id: 1 }))}>
      <input type="text" placeholder="Todo Title" value={Title} onChange={(e) => SetTitle(e.target.value)} />
      <input type="text" placeholder="Todo creator" value={createdBy} onChange={(e) => SetcreatedBy(e.target.value)} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
