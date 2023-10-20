import { QueryClient } from "react-query";

// Create a client
export const queryClient = new QueryClient();

// default query policy
export const DEFAULT_QUERY_POLICY = {
  retry: 3, // default 3, when fail fetch data
  enabled: true, // when false, dependency query,
  staleTime: 1000 * 2, // 2 sec
  cacheTime: 1000 * 7, // 10 sec
};

export const ONETIME_QUERY_POLICY = {
  retry: 3, // default 3, when fail fetch data
  enabled: true, // when false, dependency query,
  staleTime: 1000 * 7, // 2 sec
  cacheTime: 1000 * 7, // 10 sec
};
