import React from 'react';
import { NavButton } from '../common/NavButton.jsx';
import { Logo } from '../common/Logo.jsx';
import styles from './navbar.module.css';
export const Navbar = (props) => {
  return (
    <div className={styles.navbar}>

      <div className={styles.navigation}>
      

      
        <NavButton className="nav-button" value="About us" scroll={props.scroll} topage={2} />
        <NavButton className="nav-button" value="The team" scroll={props.scroll} topage={3} />
        <NavButton className="nav-button" value="Our services" scroll={props.scroll} topage={5} />
      </div>
      
    </div>
  );
};
