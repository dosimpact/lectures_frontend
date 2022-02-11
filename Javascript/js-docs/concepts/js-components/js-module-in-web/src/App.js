import Sample from "./Sample.js";
import Todo from "./todo.js";

export default class App {
  $target = null;
  dashboard = null;

  constructor($target) {
    this.$target = $target;
    console.log("helle");
    this.dashboard = new Sample($target);
    this.todo = new Todo($target);
  }
}
