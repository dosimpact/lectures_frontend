import { createContext, Dispatch, SetStateAction, useContext } from "react";

export interface Todo {
  content: string;
  isFin: boolean;
}
export interface ITodoContext {
  todoList: Todo[];
  lastedUpdate: string | null;
  title: string;
  setTodoList: Dispatch<SetStateAction<Todo[]>>;
  setLastedUpdate: Dispatch<SetStateAction<string | null>>;
  setTitle: Dispatch<SetStateAction<string>>;
}
const TodoContext = createContext<ITodoContext>({
  lastedUpdate: null,
  todoList: [],
  title: "",
  setTodoList: () => {},
  setLastedUpdate: () => {},
  setTitle: () => {},
});

export default TodoContext;

export const useMutateTodo = () => {
  const { setTodoList } = useContext(TodoContext);

  const appendTodo = (todo: Todo) => {
    setTodoList((prev) => [...prev, todo]);
  };

  const resetTodo = () => {
    setTodoList([]);
  };
  return { appendTodo, resetTodo };
};
