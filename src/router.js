import React from 'react';
import { Router, Route } from 'dva/router';
import IndexPage from './routes/IndexPage';

import Posts from "./routes/Posts.js";

import PostDetail from "./routes/PostDetail.js";

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={IndexPage} />
      <Route path="/posts" component={Posts} />
      <Route path="/posts/:key" component={PostDetail} />
    </Router>
  );
}

export default RouterConfig;
