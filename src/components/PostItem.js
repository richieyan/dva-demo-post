import React from 'react';
import styles from './PostItem.css';
import { Link } from 'dva/router'

function PostItem(props) {
    const {title,key,category } = props.post;
  return (
    <div className={styles.normal}>
        <div><Link to={`/posts/${key}`}>{title}</Link></div>
        <div>Category: {category}</div>
    </div>
  );
}

export default PostItem;
