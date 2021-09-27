/* eslint-disable no-param-reassign */
/* eslint-disable no-console */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { DeleteItem, UpdateItem } from '../../Redux/Actions/TodoActions';
import styles from './item.module.css';

const Item = ({ item }) => {
  const res = useParams();
  const { todoId } = res;
  const dispatch = useDispatch();
  const {
    name, description, proirity, completed, id,
  } = item;
  const [selected, setSelected] = useState(proirity);
  const [Completed, setCompleted] = useState(completed);
  const [Name, setName] = useState(name);
  const [Description, setDescription] = useState(description);
  const obj = {
    todo_id: todoId,
    name: Name,
    description: Description,
    proirity: selected,
    completed: Completed,
  };
  const EditItem = () => {
    const inputs = document.getElementsByClassName(id);
    inputs[0].disabled = false;
    inputs[1].disabled = false;
    inputs[2].disabled = false;
    inputs[3].disabled = false;
  };

  return (
    <div className={styles.card}>
      <span>{id}</span>
      <input className={id} type="checkbox" disabled value={Completed} onChange={() => setCompleted(!Completed)} />
      <input className={id} type="text" value={Name} disabled onChange={(e) => setName(e.target.value)} />
      <input className={id} type="text" value={Description} disabled onChange={(e) => setDescription(e.target.value)} />
      <select className={id} type="text" value={selected} disabled onChange={(e) => setSelected(e.target.value)}>
        <option disabled defaultValue hidden>{selected}</option>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
      <button type="button" onClick={() => EditItem()}>Edit</button>
      <button type="button" onClick={() => dispatch(UpdateItem(todoId, id, obj))}>Save</button>
      <button type="button" onClick={() => dispatch(DeleteItem(todoId, id))}>Delete</button>
    </div>
  );
};

export default Item;
