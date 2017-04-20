import {
    fetchPosts,
    fetchPost
} from '../services/posts'

import pathToRegexp from 'path-to-regexp';

export default {
  namespace: 'posts',
  state: {
    loading: false,
    posts: [],
    postsByKey:{}
  },
  reducers: {
    showLoading(state){ return { ...state, loading:true}; },
    hideLoading(state){ return { ...state, loading:false}; },
    save(state,{ payload : postsByKey }) {
        return {
            ...state,
            postsByKey,
            posts: Object.keys(postsByKey),
        }
    },
    update(state, { payload:post}){
        const postsByKey = {
            ...state.postsByKey,
            [post.key]:post,
        };
        return {...state, postsByKey };
    },

  },
  effects: {
    *fetchPosts(action,{call,put}){
        yield put({type:'showLoading'})
        const result = yield call(fetchPosts)
        yield put({type: 'save',payload:result});
        yield put({type: 'hideLoading'});
    },
    *fetchPost({ payload: key },{call,put}){
        yield put({type:'showLoading'});
        const result = yield call(fetchPost,key);
        console.log('fetch post result',result);
        yield put({type: 'update',payload:{...result,key}});
        yield put({type: 'hideLoading'});  
    },
  },

  subscriptions: {
    setup({dispatch,history}){
        return history.listen(({pathname})=>{
            if(pathname === '/posts'){
                dispatch({type:'fetchPosts'})
            }
            // /posts/:key
            const match = pathToRegexp('/posts/:key').exec(pathname)
            if(match){
                const key = match[1];
                dispatch({
                    type: 'fetchPost',
                    payload: key,
                });
            }
        });
    }
  },
};
