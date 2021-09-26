/* eslint-disable no-console */
import React from 'react';
import { useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  console.log(location);
  return (
    <div>
      <i className="fas fa-bars" />
      <h1>Todos</h1>
      <i className="fas fa-search" />
    </div>
  );
};

export default Navbar;
