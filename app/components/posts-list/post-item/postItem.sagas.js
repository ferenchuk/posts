import axios from 'axios';
import * as actions from './postItem.actions';
import * as constants from './postItem.constants';
import postItem from './postItem.reducer';
import { call, put, take, takeLatest, select, fork } from 'redux-saga/effects';

const fetchPost = id => (
  axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(response => response.data)
);

const fetchPostAuthor = id => (
  axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(response => response.data)
);

const fetchPostComments = id => (
  axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
    .then(response => response.data)
);

function* loadPostItem(action) {
  try {
    const data = yield call(fetchPost, action.id);
    const { userId } = data;
    yield put(actions.getPostDataSuccess(data));
    yield put(actions.getPostAuthor(userId));
  } catch(ex) {
    yield put(actions.getPostDataFailed(ex));
  }
}

function* loadComments(action) {
  const { payload } = action;
  try {
    let data = yield call(fetchPostComments, payload.id);
    yield put(actions.getPostCommentsSuccess(data));
  } catch(ex) {
    yield put(actions.getPostCommentsFailed(ex));
  }
}

function* loadAuthor(action) {
  const { payload } = action;
  try {
    const data = yield call(fetchPostAuthor, payload.id);
    yield put(actions.getPostAuthorSuccess(data));
  } catch (ex) {
    yield put(actions.getPostAuthorFailed(ex));
  }
}

export default function () {
  return [
    takeLatest(constants.GET_POST_DATA, loadPostItem),
    takeLatest(constants.GET_POST_AUTHOR, loadAuthor),
    takeLatest(constants.GET_POST_COMMENTS, loadComments)
  ]
}
