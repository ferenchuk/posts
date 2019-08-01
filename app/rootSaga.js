import postsSaga from './components/posts-list/postList.sagas';
import { all } from 'redux-saga/effects';

function *rootSaga() {
  return yield all([
    ...postsSaga()
  ])
}

export default rootSaga;
