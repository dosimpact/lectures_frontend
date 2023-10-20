import { useMutation } from "react-query";
import { JSON_PLACEHOLDER } from "../apis";

export const useMutationPostDelete = () =>
  useMutation((postId) => JSON_PLACEHOLDER.DELETE.POST(postId));

export const useMutationPostUpdate = () =>
  useMutation((postId) => JSON_PLACEHOLDER.DELETE.POST(postId));
