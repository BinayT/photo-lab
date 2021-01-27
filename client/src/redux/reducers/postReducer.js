import {
  POSTS_REQUEST,
  POSTS_SUCCESS,
  POSTS_ERROR,
} from '../constants/postConstants';

export const postReducer = (state = { posts: [] }, action) => {
  switch (action.type) {
    case POSTS_REQUEST:
      return { loading: true, posts: [] };
    case POSTS_SUCCESS:
      return { loading: false, posts: action.payload };
    case POSTS_ERROR:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
