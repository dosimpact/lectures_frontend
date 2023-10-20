import { Record } from "../interfaces";
import axios from "axios";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { doFilteringState } from "../store";
import { useRecoilValue } from "recoil";
import { useMemo } from "react";

const useTodoList = () => {
  const { data, isLoading, isSuccess, isError } = useQuery("todo-list", () => {
    return axios.get("/api/todo");
  });
  const queryClient = useQueryClient();
  const refresh = () => {
    // todo-list가 가진
    queryClient.invalidateQueries("todo-list");
  };

  const createMutation = useMutation(
    "todo-list",
    () => {
      return axios.post("/api/todo", {
        fields: {
          Name: "new todo",
          Done: false,
        },
      });
    },
    {
      onSuccess: () => {
        // reflesh 함수 호출,새로운 todo를 만들고 -> cache invalid -> refetch
        refresh();
      },
    }
  );

  const deleteMutation = useMutation(
    "todo-list",
    (id: string) => {
      return axios.delete(`/api/todo?id=${id}`);
    },
    {
      onSuccess: () => {
        // reflesh 함수 호출,새로운 todo를 만들고 -> cache invalid -> refetch
        refresh();
      },
    }
  );

  const updateMutation = useMutation(
    "todo-list",
    (record: Record) => {
      return axios.patch(`/api/todo?id=${record.id}`, record);
    },
    {
      onSuccess: () => {
        // reflesh 함수 호출,새로운 todo를 만들고 -> cache invalid -> refetch
        refresh();
      },
    }
  );

  const doFiltering = useRecoilValue(doFilteringState);

  // 필터가 적용이 된다면 , memo로 데이터를 가지고 있다가 --- 필터링 해서 주기

  //   const todoList = useMemo(() => {
  //     const arr = data;
  //     if (doFiltering) {
  //       return arr.filter(a => a.);
  //     } else {
  //       return arr;
  //     }
  //   }, [data, doFiltering]);

  return {
    todoList: data ? (data.data.records as Record[]) : [],
    addNewTodo: createMutation.mutate, //(id: string, record: Record) => {},
    updateTodo: updateMutation.mutate,
    deleteTodo: deleteMutation.mutate,
    isLoading: false,
  };
};

export default useTodoList;
