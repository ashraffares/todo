/* eslint-disable max-len */
import React, { useState } from 'react';

const ItemForm = () => {
  const [Name, SetName] = useState();
  const [Description, SetDescription] = useState();
  const [Proirity, setProirity] = useState();
  const [TodoId, setTodoid] = useState();

  return (
    <form>
      <input type="checkbox" />
      <input placeholder="Name" value={Name} onClick={(e) => SetName(e.target.value)} />
      <input placeholder="Description" value={Description} onClick={(e) => SetDescription(e.target.value)} />
      <input placeholder="Proirity" value={Proirity} onClick={(e) => setProirity(e.target.value)} />
      <input placeholder="TodoId" value={TodoId} onClick={(e) => setTodoid(e.target.value)} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ItemForm;
