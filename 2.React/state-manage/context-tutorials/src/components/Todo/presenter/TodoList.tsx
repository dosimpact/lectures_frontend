import React from "react";
import { ITodoContext } from "../state/TodoContext";

interface ITodoList
  extends Omit<ITodoContext, "setTodoList" | "setLastedUpdate" | "setTitle"> {}

const TodoList: React.FC<ITodoList> = ({ lastedUpdate, title, todoList }) => {
  return (
    <div>
      <h3>{title}</h3>
      <div>lastedUpdate : {lastedUpdate}</div>
      <ul>
        {todoList.map((todo, idx) => {
          return <li>{todo.content}</li>;
        })}
      </ul>
    </div>
  );
};

export default TodoList;
