/* eslint-disable react/prop-types */
import React from 'react';

const Item = ({ item }) => {
  const { name, description, proirity } = item;
  return (
    <div>
      <h3>{name}</h3>
      <h3>{description}</h3>
      <h3>{proirity}</h3>
    </div>
  );
};

export default Item;
