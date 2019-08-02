import * as types from './postItem.constants';

export const getPostData = id => {
  return {
    type: types.GET_POST_DATA,
    id
  }
};

export const getPostDataSuccess = post => ({
  type: types.GET_POST_DATA_SUCCESS,
  payload: { post }
});

export const getPostDataFailed = ex => ({
  type: types.GET_POST_DATA_FAILED
});

export const getPostAuthor = id => ({
  type: types.GET_POST_AUTHOR,
  payload: { id }
});

export const getPostAuthorSuccess = author => ({
  type: types.GET_POST_AUTHOR_SUCCESS,
  payload: { author }
});

export const getPostAuthorFailed = ex => ({
  type: types.GET_POST_AUTHOR_FAILED
});

export const getPostComments = id => ({
  type: types.GET_POST_COMMENTS,
  payload: { id }
});

export const getPostCommentsSuccess = comments => ({
  type: types.GET_POST_COMMENTS_SUCCESS,
  payload: { comments }
});

export const getPostCommentsFailed = ex => ({
  type: types.GET_POST_COMMENTS_FAILED
});
