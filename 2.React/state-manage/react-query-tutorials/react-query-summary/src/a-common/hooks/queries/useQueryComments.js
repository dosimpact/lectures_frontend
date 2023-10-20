import { useQuery } from "react-query";
import {
  DEFAULT_QUERY_POLICY,
  ONETIME_QUERY_POLICY,
} from "../../../common/reactQuery";
import { JSON_PLACEHOLDER, JSON_PLACEHOLDER_KEYS } from "../../apis";

const useQueryComments = (postId) => {
  const { isLoading, isError, data } = useQuery(
    JSON_PLACEHOLDER_KEYS.GET.COMMENTS(postId),
    JSON_PLACEHOLDER.GET.COMMENTS(postId),
    {
      ...DEFAULT_QUERY_POLICY,
    }
  );

  return { isLoading, isError, data };
};

export default useQueryComments;
