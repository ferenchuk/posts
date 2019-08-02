import { applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import sagaMiddleware from './saga';

const middleware = compose(
  applyMiddleware(
    thunkMiddleware,
    sagaMiddleware
  ),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default middleware;
