import React from 'react';
import styles from './Posts.css';
import PostItem from './PostItem';

function Posts(props) {
  return (
    <div className={styles.normal}>
        <h1>Posts</h1>
        <div>Loading: {props.loading + '' }<div>
        { 
            props.posts.map(post => <PostItem key={post.key} post={post} />) 
        }
    </div>
  );
}

export default Posts;
