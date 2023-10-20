import Axios from "axios";

const JSON_PLACEHOLDER_APIS_HOST = "https://jsonplaceholder.typicode.com";

export const JSON_PLACEHOLDER = {
  GET: {
    POSTS: (pageNum) =>
      Axios(`${JSON_PLACEHOLDER_APIS_HOST}/posts?_limit=10&_page=${pageNum}`, {
        method: "GET",
      }),
    COMMENTS: (postId) =>
      `${JSON_PLACEHOLDER_APIS_HOST}/comments?postId=${postId}`,
  },
  POST: {
    POST: (postId) => `${JSON_PLACEHOLDER_APIS_HOST}/postId/${postId}`,
  },
  PATCH: {},
  DELETE: {
    POST: (postId) => `${JSON_PLACEHOLDER_APIS_HOST}/postId/${postId}`,
  },
};

export const JSON_PLACEHOLDER_KEYS = {
  GET: {
    POSTS: (pageNum) => ["GET", "posts", pageNum],
    COMMENTS: (postId) => ["GET", "comments", postId],
  },
  POST: {
    POST: (postId) => ["POST", "postId", postId],
  },
  PATCH: {},
  DELETE: {
    POST: (postId) => ["DELETE", "postId", postId],
  },
};
