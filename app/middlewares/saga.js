import createSagaMiddleware from 'redux-saga';
import mySaga from './../rootSaga';

const sagaMiddleware = createSagaMiddleware();

export function runSaga() {
  return sagaMiddleware.run(mySaga);
}

export default sagaMiddleware;
