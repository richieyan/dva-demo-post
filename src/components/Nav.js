import React from 'react';
import styles from './Nav.css';
import { Link } from 'dva/router';

function Nav() {
  return (
    <div className={styles.normal}>
      <div className={styles.left}>
        <Link to="/posts" className={styles.show} activeClassName={styles.hide}>
            Back Posts
        </Link>
      </div>
      <div className={styles.left}>
          <Link to="/posts/new" className={styles.show} activeClassName={styles.hide}>
            New Post
        </Link>
      </div>
    </div>
  );
}

export default Nav;
