import React from "react";
import { observer, useLocalStore } from "mobx-react";
const TodoView = ({
  todoList,
  lastedUpdate,
  addTodo,
  updateTodo,
  deleteTodo,
}) => {
  const store = useLocalStore(() => ({
    userInput: "",
    onChangeInput: (e) => {
      store.userInput = e.target.value;
    },
  }));

  return (
    <div>
      <h3>TodoView Funcs</h3>
      <input value={store.userInput} onChange={store.onChangeInput}></input>
      <button
        onClick={() => {
          addTodo({ name: store.userInput, isFin: true });
          store.userInput = "";
        }}
      >
        Add todo
      </button>
      <ul>
        {todoList &&
          todoList?.map((todo) => {
            return (
              <li>
                name : {todo.name} | isFin {todo?.isFin ? "fin" : "not yet"}{" "}
              </li>
            );
          })}
      </ul>
      <div> lasted Updated {lastedUpdate} </div>
    </div>
  );
};

export default observer(TodoView);
