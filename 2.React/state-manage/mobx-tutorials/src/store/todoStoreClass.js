import { observable } from "mobx";

@observable
class TodoStoreClass {
  todoList = [];
  lastedUpdate = null;
}
