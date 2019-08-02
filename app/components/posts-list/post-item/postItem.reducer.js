import * as constants from './postItem.constants';

const initialState = {
  post: {},
  author: {},
  comments: []
};

export default function postItem(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case constants.GET_POST_DATA_SUCCESS:
      return {
        ...state,
        post: payload.post
      };

    case constants.GET_POST_DATA_FAILED:
      return state;

    case constants.GET_POST_AUTHOR_SUCCESS:
      return {
        ...state,
        author: payload.author
      };

    case constants.GET_POST_AUTHOR_FAILED:
      return state;

    case constants.GET_POST_COMMENTS_SUCCESS:
      return {
        ...state,
        comments: payload.comments
      };

    case constants.GET_POST_COMMENTS_FAILED:
      return state;

    default:
      return state;
  }
}