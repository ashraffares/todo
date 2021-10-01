import React from 'react';
import { Link } from 'react-router-dom';
import styles from './navbar.module.css';

const Navbar = () => (
  <nav className={styles.navbar}>
    <Link to="/" onClick={() => localStorage.clear()}>Sign Out</Link>
    <h1 className={styles.header}>Todos</h1>
    <i className="fas fa-search" />
  </nav>
);

export default Navbar;
