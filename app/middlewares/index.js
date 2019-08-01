import { applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import sagaMiddleware from './saga';

const middleware = compose(
  applyMiddleware(
    thunkMiddleware,
    sagaMiddleware
  ),
  window.devToolsExtension ? window.devToolsExtension() : devTools => devTools
);

export default middleware;
