import * as constants from './postList.constants';

const initialState = {
  items: [],
  page: 1,
  count: 5
};

export default function posts(state = initialState, action) {
  const {type, payload} = action;

  switch (type) {
    case constants.GET_POST_LIST:
      return state;

    case constants.GET_POST_LIST_SUCCESS:
      return {
        ...state,
        items: payload.items
      };

    case constants.GET_POST_LIST_FAILED:
      return state;

    default:
      return state;
  }
}