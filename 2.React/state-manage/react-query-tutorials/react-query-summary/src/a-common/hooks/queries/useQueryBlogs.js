import { useEffect } from "react";
import { useQuery, useQueryClient } from "react-query";
import { ONETIME_QUERY_POLICY } from "../../../common/reactQuery";
import { JSON_PLACEHOLDER, JSON_PLACEHOLDER_KEYS } from "../../apis";

const useQueryBlogs = (pageNum) => {
  const { data, isLoading, isError } = useQuery(
    JSON_PLACEHOLDER_KEYS.GET.POSTS(pageNum),
    async () => JSON_PLACEHOLDER.GET.POSTS(pageNum),
    {
      ...ONETIME_QUERY_POLICY,
      select: (data) => data?.data,
    }
  );

  return { data, isLoading, isError };
};

export const useFetchQueryBlogs = () => {
  const queryClient = useQueryClient();
  const fetchQuery = (pageNum) => {
    queryClient.fetchQuery(
      JSON_PLACEHOLDER_KEYS.GET.POSTS(pageNum),
      async () => JSON_PLACEHOLDER.GET.POSTS(pageNum),
      {
        ...ONETIME_QUERY_POLICY,
        select: (data) => data?.data,
      }
    );
  };
  return { fetchQuery };
};

export const useQueryBlogsSelectTitle = (pageNum) => {
  const { data: posts, isError, isLoading } = useQueryBlogs();
  return { isError, isLoading, titles: posts?.map((post) => post.title) };
};

export const useEffectPrefecthBlogs = (pageNum) => {
  const queryClient = useQueryClient();
  useEffect(() => {
    queryClient.prefetchQuery(
      JSON_PLACEHOLDER_KEYS.GET.POSTS(pageNum),
      async () => JSON_PLACEHOLDER.GET.POSTS(pageNum)
    );
  }, [pageNum]);
};

export default useQueryBlogs;
