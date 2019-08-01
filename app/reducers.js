import { combineReducers } from 'redux';
import postList from './components/posts-list/postList.reducer';

const rootReducer = combineReducers({
  postList
});

export default rootReducer;
