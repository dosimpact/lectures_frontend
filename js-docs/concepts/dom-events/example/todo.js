const todoAddButtonEl = document.querySelector("#todoAddButton");
const todoListEl = document.querySelector("#todoList");
const nowEl = document.querySelector("#now");

function handleAddTodo(e) {
  const newTodo = document.createElement("div");
  newTodo.innerText = ` todo 입력하시오 - ${todoListEl.childElementCount + 1}`;
  todoListEl.appendChild(newTodo);
}
function handleClickTodoList(e) {
  nowEl.innerHTML = `${e.target.innerText}`;
}
function handleNowTodo() {}

todoAddButtonEl.addEventListener("click", handleAddTodo);
todoListEl.addEventListener("click", handleClickTodoList);
