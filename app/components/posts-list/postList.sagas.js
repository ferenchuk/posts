import axios from 'axios';
import * as actions from './postList.actions';
import * as constants from './postList.constants';
import { call, put, takeLatest } from 'redux-saga/effects';

const fetchPosts = () => (
  axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.data)
);

function* loadPosts() {
  try {
    const posts = yield call(fetchPosts);
    yield put(actions.getPostsListSuccess(posts));
  } catch (error) {
    yield put(actions.getPostsListFailed());
  }
}

export default function () {
  return [
    takeLatest(constants.GET_POST_LIST, loadPosts)
  ]
}
