import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './header.styles.css';

function Header() {
  return (
    <header className="container" >
      <div className={styles.headerInner}>
        <div>
          <h1>Ivan Ferenchuk</h1>
        </div>
        <nav>
          <ul className={styles.nav}>
            <li><NavLink to="/" exact={true} activeClassName={styles.active}>Home</NavLink></li>
            <li><NavLink to="/posts" activeClassName={styles.active}>Posts</NavLink></li>
            <li><NavLink to="/about" activeClassName={styles.active}>About</NavLink></li>
            <li><NavLink to="/contact-us" activeClassName={styles.active}>Contact Us</NavLink></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header;
