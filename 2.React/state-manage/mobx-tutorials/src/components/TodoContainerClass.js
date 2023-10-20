import React from "react";
import { observer } from "mobx-react";
import TodoViewClass from "./TodoViewClass";
import todoStore from "@store/todoStore";

// @observer
class TodoContainerClass extends React.Component {
  render() {
    return (
      <div>
        <h3>TodoContainerClass</h3>
        <TodoViewClass
          lastedUpdate={todoStore.lastedUpdate}
          todoList={todoStore.todoList}
          addTodo={todoStore.addTodo}
          updateTodo={todoStore.updateTodo}
          deleteTodo={todoStore.deleteTodo}
        />
      </div>
    );
  }
}

export default observer(TodoContainerClass);
