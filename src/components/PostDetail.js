import React from 'react';
import styles from './PostDetail.css';
import { Spin } from 'antd'
function PostDetail(props) {
    const { title,category,content} = props.post;
  return (
    <div className={styles.normal}>
        <Spin spinning={props.loading}>
            <div>{title}</div>
            <div>Category:{category}</div>
            <div>{content}</div>
        </Spin>
    </div>
  );
}

export default PostDetail;
