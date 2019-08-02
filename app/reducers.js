import { combineReducers } from 'redux';
import postList from './components/posts-list/postList.reducer';
import postItem from './components/posts-list/post-item/postItem.reducer';

const rootReducer = combineReducers({
  postList,
  postItem
});

export default rootReducer;
