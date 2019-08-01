import axios from 'axios';
import * as actions from './postList.actions';
import * as constants from './postList.constants';
import { call, put, fork, takeLatest, takeEvery }  from 'redux-saga/effects';

const fetchPosts = () => (
  axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.data)
);

export function* loadPosts() {
  try {
    const posts = yield call(fetchPosts);
    yield put(actions.getPostsListSuccess(posts));
  } catch(error) {
    yield put(actions.getPostsListFailed());
  }
}

export default function() {
  return [
    takeLatest('GET_POST_LIST', function* () {
      try {
        const posts = yield call(fetchPosts);
        yield put(actions.getPostsListSuccess(posts));
      } catch (ex) {
        yield put(actions.getPostsListFailed());
      }
      }
    )
  ]
}
