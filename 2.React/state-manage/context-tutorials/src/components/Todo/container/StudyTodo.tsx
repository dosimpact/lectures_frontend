import React, { useState } from "react";
import TodoContext, { Todo } from "../state/TodoContext";
import TodoController from "./TodoController";

const StudyTodo = () => {
  const [title, setTitle] = useState<string>("Study");
  const [todoList, setTodoList] = useState<Todo[]>([
    {
      content: "Java",
      isFin: false,
    },
    {
      content: "C#",
      isFin: true,
    },
  ]);
  const [lastedUpdate, setLastedUpdate] = useState<string | null>("");

  return (
    <div>
      <TodoContext.Provider
        value={{
          title,
          todoList,
          lastedUpdate,
          setTitle,
          setTodoList,
          setLastedUpdate,
        }}
      >
        <TodoController />
      </TodoContext.Provider>
    </div>
  );
};

export default StudyTodo;
