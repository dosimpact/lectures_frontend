import React, { useState, useEffect, useCallback } from "react";
import useQueryBlogs, {
  useEffectPrefecthBlogs,
  useFetchQueryBlogs,
} from "./hooks/queries/useQueryBlogs";
import useQueryComments from "./hooks/queries/useQueryComments";

const PostDetail = ({ postId }) => {
  // const { data, isError, isLoading } = useQueryComments(postId);
  const { fetchQuery } = useFetchQueryBlogs();

  const handleTestReFetch = () => {
    fetchQuery(postId);
  };
  return (
    <div>
      <button onClick={handleTestReFetch}>refetch</button>
      <div>PostDetail :{postId}</div>
    </div>
  );
};

const PostPagination = () => {
  const [page, setPage] = useState(1);
  const [postId, setPostId] = useState(null);
  const { data: posts, isError, isLoading } = useQueryBlogs(page);
  useEffectPrefecthBlogs(page + 1);

  if (isLoading) return <div>loading...</div>;
  if (isError) return <div>error...</div>;

  return (
    <div>
      <h3>PostPagination</h3>
      {posts?.map((post) => (
        <div
          style={{ cursor: "pointer" }}
          onClick={() => {
            setPostId(post?.id);
          }}
        >
          <div>{post?.title}</div>
        </div>
      ))}
      <div>
        <button onClick={() => setPage((p) => p - 1)}>Prev</button>
        <button onClick={() => setPage((p) => p + 1)}>Next</button>
      </div>
      <PostDetail postId={postId} />
    </div>
  );
};

const BlogApp = () => {
  return (
    <div>
      <h5>BlogApp</h5>
      <PostPagination />
    </div>
  );
};

export default BlogApp;
