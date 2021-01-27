import axios from 'axios';

import {
  POSTS_REQUEST,
  POSTS_SUCCESS,
  POSTS_ERROR,
} from '../constants/postConstants';

export const getPosts = () => async (dispatch) => {
  try {
    dispatch({ type: POSTS_REQUEST });

    const { data } = axios.get('/posts');

    dispatch({ type: POSTS_SUCCESS, payload: data });
  } catch (error) {
    console.log(error.message);
    dispatch({
      type: POSTS_ERROR,
      payload: error.message,
    });
  }
};
