import React from 'react';
import styles from './PostItem.css';

function PostItem(props) {
    const {title,key,category } = props.post;
  return (
    <div className={styles.normal}>
        <div>{title}</div>
        <div>Category: {category}</div>
    </div>
  );
}

export default PostItem;
