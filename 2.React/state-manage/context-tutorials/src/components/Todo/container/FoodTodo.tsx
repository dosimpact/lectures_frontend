import React, { useState } from "react";
import TodoContext, { Todo } from "../state/TodoContext";
import TodoController from "./TodoController";

const FoodTodo = () => {
  const [title, setTitle] = useState<string>("Food");
  const [todoList, setTodoList] = useState<Todo[]>([
    {
      content: "apple",
      isFin: false,
    },
    {
      content: "banana",
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

export default FoodTodo;
