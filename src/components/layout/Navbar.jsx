import React from 'react';
import { NavButton } from '../common/NavButton.jsx';
import { Logo } from '../common/Logo.jsx';
import styles from './navbar.module.css';
export const Navbar = () => {
  console.log(styles);
  return (
    <div className={styles.navbar}>

      <div className={styles.navigation}>
        <NavButton className="nav-button" value="About us" />
        <NavButton className="nav-button" value="The team" />
      </div>
      
    </div>
  );
};
