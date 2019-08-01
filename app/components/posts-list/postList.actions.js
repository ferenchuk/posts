import * as types from './postList.constants';

export const getPostsList = () => {
  return {
    type: types.GET_POST_LIST
  }
};

export const getPostsListSuccess = items => {
  return {
    type: types.GET_POST_LIST_SUCCESS,
    payload: {
      items
    }
  }
};

export const getPostsListFailed = () => {
  return {
    type: types.GET_POST_LIST_FAILED
  }
};
