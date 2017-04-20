import React from 'react';
import styles from './Posts.css';
import PostItem from './PostItem';
import { Spin } from 'antd'

function Posts(props) {
    console.log(props.posts)
  return (
    <div className={styles.normal}>
        <h1>Posts</h1>
        <div>Loading: {props.loading + '' }</div>
        <Spin spinning={props.loading}/>
        { 
            props.posts.map(post => <PostItem key={post.key} post={post} />) 
        }
    </div>
  );
}

export default Posts;
