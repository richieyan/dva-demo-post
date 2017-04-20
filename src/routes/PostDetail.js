import React from 'react';
import { connect } from 'dva';
import styles from './PostDetail.css';
import Nav from '../components/Nav'

import PostDetailComponent from '../components/PostDetail'

function PostDetail(props) {
  console.log('PostDetail->props:',props)
  return (
    <div className={styles.normal}>
      <Nav/>
      <PostDetailComponent post ={props.post} loading={props.loading}/>
    </div>
  );
}

function mapStateToProps(state,ownProps) {
    const key = ownProps.params.key;
  return {
    loading:state.posts.loading,
    post: {
        ... state.posts.postsByKey[key],
        key,
    }
  };
}

export default connect(mapStateToProps)(PostDetail);
