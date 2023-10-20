import React, { useContext, useState } from "react";
import TodoList from "../presenter/TodoList";
import TodoContext, { useMutateTodo } from "../state/TodoContext";

const TodoController = () => {
  const { title, todoList, lastedUpdate } = useContext(TodoContext);
  const { appendTodo, resetTodo } = useMutateTodo();

  const handleSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // e.preventDefault();
    if (e.key === "Enter") {
      appendTodo({
        content: (e.target as HTMLInputElement).value,
        isFin: false,
      });
    }
  };

  const [input, setInput] = useState("");

  return (
    <div>
      <input
        type="text"
        onKeyDown={handleSubmit}
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={resetTodo}>RESET</button>
      <TodoList
        title={title}
        todoList={todoList}
        lastedUpdate={lastedUpdate}
      ></TodoList>
    </div>
  );
};

export default TodoController;
