/**Server State Async */
import { getPostById, getPosts } from "../api";
import { createAsyncThunk } from "./utils";

export const PROMISE_SUCCESS = "_SUCCESS";
export const PROMISE_FAIL = "_FAIL";

export const GET_POST_KEY = "post";
export const GET_POST = "GET_POST";
export const GET_POST_SUCCESS = "GET_POST_SUCCESS";
export const GET_POST_FAIL = "GET_POST_FAIL";

export const getPostV2Query = createAsyncThunk(GET_POST, getPostById);

export const GET_POSTS_KEY = "posts";
export const GET_POSTS = "GET_POSTS";
export const GET_POSTS_SUCCESS = "GET_POSTS_SUCCESS";
export const GET_POSTS_FAIL = "GET_POSTS_FAIL";

export const getPostsQuery = createAsyncThunk(GET_POSTS, getPosts);

// export const getPost =
//   ({ id }) =>
//   async (dispatch) => {
//     dispatch({ type: GET_POST });
//     try {
//       const post = await getPostById({ id });
//       dispatch({ type: GET_POST_SUCCESS, payload: { data: post } });
//     } catch (error) {
//       dispatch({ type: GET_POST_FAIL, payload: { error } });
//     }
//   };
