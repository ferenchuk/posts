import React from 'react';
import styles from './footer.styles.css';
import { NavLink } from 'react-router-dom';

export default () => (
  <footer>
    <div className="container">
      <ul className={styles.nav}>
        <li><NavLink to="/" exact={true} activeClassName={styles.active}>Home</NavLink></li>
        <li><NavLink to="/posts" activeClassName={styles.active}>Posts</NavLink></li>
        <li><NavLink to="/about" activeClassName={styles.active}>About</NavLink></li>
        <li><NavLink to="/contact-us" activeClassName={styles.active}>Contact Us</NavLink></li>
      </ul>
    </div>
  </footer>
)
