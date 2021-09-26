/* eslint-disable no-console */
import React from 'react';
import { useLocation } from 'react-router-dom';
import styles from './navbar.module.css';

const Navbar = () => {
  const location = useLocation();
  console.log(location);
  return (
    <nav className={styles.navbar}>
      <i className="fas fa-bars" />
      <h1 className={styles.header}>Todos</h1>
      <i className="fas fa-search" />
    </nav>
  );
};

export default Navbar;
