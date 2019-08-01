import axios from 'axios';
import * as actions from './postList.actions';
import * as constants from './postList.constants';
import { call, put, takeLatest }  from 'redux-saga/effects';

const fetchPosts = () => {
  return axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
      return response.data
    });
};

function* loadPosts() {
  try {
    const posts = yield call((fetchPosts));
    yield put(actions.getPostsListSuccess(posts));
  } catch (e) {
    yield put(actions.getPostsListFailed());
  }
}

function* postListSaga() {
  yield takeLatest(constants.GET_POST_LIST, loadPosts)
}

export default postListSaga;
