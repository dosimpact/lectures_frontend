import { createContext } from "react";

const PostContext = createContext({
  page: null,
  setPage: null,
  totalPage: null,
  postQuery: null,
  postsQuery: null,
  handleGetPostById: null,
});

export default PostContext;
