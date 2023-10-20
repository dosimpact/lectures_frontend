import { useContext, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getPost,
  getPostsQuery,
  getPostV2Query,
} from "../common/state/queryActions";
import PostContext from "./PostContext";
import { Route, Switch } from "react-router-dom";
import { goToHome, goToPost } from "./state/actions";
const View = () => {
  return (
    <>
      <h3>Post</h3>
      <PostSelector />
      <PostView />
      <Switch>
        <Route exact path="/" component={() => <div>Route:/</div>} />
        <Route
          exact
          path="/post"
          component={() => <div>Route:/post</div>}
        ></Route>
      </Switch>
    </>
  );
};

const PostSelector = () => {
  const {
    page,
    setPage,
    totalPage,
    handleGetPostById,
    handleGotoHome,
    handleGotoPost,
  } = useContext(PostContext);
  return (
    <>
      <button onClick={handleGotoHome}>Home</button>
      <button onClick={handleGotoPost}>Post</button>
      <div>
        now page : {page} / {totalPage}
      </div>
      <ul>
        {new Array(totalPage).fill(0).map((_, idx) => {
          const p = idx + 1;
          return (
            <button
              onClick={() => {
                setPage(p);
                handleGetPostById(p);
              }}
              key={p}
            >
              {p}
            </button>
          );
        })}
      </ul>
    </>
  );
};

const PostView = () => {
  const { postQuery } = useContext(PostContext);
  return <>{JSON.stringify(postQuery.data)}</>;
};

const ViewModel = () => {
  const dispatch = useDispatch();
  const postQuery = useSelector((state) => state?.query?.post);
  const postsQuery = useSelector((state) => state?.query?.posts);

  const [page, setPage] = useState(1);

  const handleGetPostById = (id) => {
    dispatch(getPostV2Query({ id }));
  };

  const postsCounter = useMemo(
    () => (postsQuery?.data || []).length,
    [postsQuery]
  );

  useEffect(() => {
    dispatch(getPostsQuery());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getPostV2Query({ id: 1 }));
  }, [dispatch]);

  const handleGotoHome = () => {
    dispatch(goToHome());
  };
  const handleGotoPost = () => {
    dispatch(goToPost());
  };

  return (
    <PostContext.Provider
      value={{
        page,
        setPage,
        totalPage: postsCounter,
        postQuery,
        postsQuery,
        handleGetPostById,
        handleGotoHome,
        handleGotoPost,
      }}
    >
      <View />
    </PostContext.Provider>
  );
};

const Post = () => {
  return <ViewModel />;
};

export default Post;
