/* eslint-disable max-len */
import React, { useState } from 'react';
import styles from './itemform.module.css';

const ItemForm = () => {
  const [Name, SetName] = useState();
  const [Description, SetDescription] = useState();
  const [Proirity, setProirity] = useState();
  const [Completed, setCompleted] = useState(false);
  return (
    <div className={styles.wrapper}>
      <form className={styles.form}>
        <div className={styles.w100}>
          <label htmlFor="completed">
            Completed:
            <input type="checkbox" id="completed" value={Completed} onChange={(e) => setCompleted(e.target.value)} />
          </label>
        </div>
        <div className={styles.w100}>
          <label htmlFor="Name">
            Name:
            <input placeholder="Name" value={Name} onChange={(e) => SetName(e.target.value)} id="name" className={styles.w100} />
          </label>

        </div>
        <div className={styles.w100}>
          <label htmlFor="Description">
            Description:
            <input placeholder="Description" value={Description} onChange={(e) => SetDescription(e.target.value)} id="Description" className={styles.w100} />
          </label>
        </div>
        <div className={styles.w100}>
          <label htmlFor="Proirity">
            proirity:
            <select value={Proirity} onChange={(e) => setProirity(e.target.value)} className={styles.w100}>
              <option disabled selected hidden>Proirity</option>
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
          </label>
        </div>

        <button className={`${styles.btn} ${styles.w100}`} type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ItemForm;
