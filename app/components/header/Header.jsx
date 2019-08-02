import React from 'react';
import { Link } from 'react-router-dom';
import styles from './header.styles.css';

function Header() {
  return (
    <header>
      <div className={styles.headerInner}>
        <div>
          <h1>Ivan Ferenchuk</h1>
        </div>
        <nav>
          <ul className={styles.nav}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/posts">Posts</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header;
