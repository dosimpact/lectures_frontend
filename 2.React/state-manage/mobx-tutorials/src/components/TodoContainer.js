import React from "react";
import { observer } from "mobx-react";
import TodoViewClass from "./TodoViewClass";
import todoStore from "@store/todoStore";
import TodoView from "./TodoView";

const TodoContainer = () => {
  console.log("-->todoList", todoStore.todoList);

  return (
    <div>
      <h3>TodoContainerClass</h3>
      <TodoView
        lastedUpdate={todoStore.lastedUpdate}
        todoList={todoStore.todoList}
        addTodo={todoStore.addTodo}
        updateTodo={todoStore.updateTodo}
        deleteTodo={todoStore.deleteTodo}
      />
    </div>
  );
};

export default observer(TodoContainer);
