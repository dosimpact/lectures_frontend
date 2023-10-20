import {
  GET_POST,
  GET_POST_FAIL,
  GET_POST_SUCCESS,
  GET_POST_KEY,
  GET_POSTS,
  GET_POSTS_FAIL,
  GET_POSTS_SUCCESS,
  GET_POSTS_KEY,
} from "./queryActions";
import { createAsyncActionState, reduceAsyncAction } from "./utils";

const initState = {
  [GET_POST_KEY]: createAsyncActionState.init(),
  [GET_POSTS_KEY]: createAsyncActionState.init(),
};

export const queryReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_POST:
    case GET_POST_SUCCESS:
    case GET_POST_FAIL: {
      return reduceAsyncAction(GET_POST, GET_POST_KEY, { keepData: true })(
        state,
        action
      );
    }
    case GET_POSTS:
    case GET_POSTS_FAIL:
    case GET_POSTS_SUCCESS: {
      return reduceAsyncAction(GET_POSTS, GET_POSTS_KEY, { keepData: true })(
        state,
        action
      );
    }
    default:
      return state;
  }
};
