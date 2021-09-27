import React from 'react';
import styles from './navbar.module.css';

const Navbar = () => (
  <nav className={styles.navbar}>
    <i className="fas fa-bars" />
    <h1 className={styles.header}>Todos</h1>
    <i className="fas fa-search" />
  </nav>
);

export default Navbar;
