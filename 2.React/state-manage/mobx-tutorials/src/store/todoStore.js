import { observable, action, autorun } from "mobx";

const todoStore = observable({
  todoList: [
    {
      name: "first todo",
      isFin: false,
    },
  ],
  lastedUpdate: null,
  addTodo: action(function (todo) {
    console.log("action addTodo");
    todoStore.todoList.push(todo);
    todoStore.lastedUpdate = new Date().toDateString();
  }),
  updateTodo: action(function (idx, todo) {
    todoStore.todoList[idx] = todo;
  }),
  deleteTodo: action(function (idx) {
    todoStore.todoList.splice(idx, 1);
  }),
});

autorun(() => {
  console.log("-->autorun-->", todoStore.todoList, todoStore.lastedUpdate);
});

export default todoStore;
