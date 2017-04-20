import React from 'react';
import { connect } from 'dva';
import styles from './Posts.css';
import PostsComponent from '../components/Posts';
import Nav from '../components/Nav'

function Posts(props) {
  return (
    <div className={styles.normal}>
        <Nav/>
        <PostsComponent loading={props.loading} posts={props.posts}/>
    </div>
  );
}

function mapStateToProps(state) {
    const { loading, posts, postsByKey } = state.posts
  return {
        loading,
        posts: posts.map(key=>({... postsByKey[key],key}))
    };
}

export default connect(mapStateToProps)(Posts);
