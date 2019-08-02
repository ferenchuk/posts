import postsSaga from './components/posts-list/postList.sagas';
import postItemSaga from './components/posts-list/post-item/postItem.sagas';
import { all } from 'redux-saga/effects';

function *rootSaga() {
  return yield all([
    ...postsSaga(),
    ...postItemSaga()
  ])
}

export default rootSaga;
