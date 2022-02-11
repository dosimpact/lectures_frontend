import { userage, username } from "./constants.js";
export default class Todo {
  $target = null;

  constructor($target) {
    this.$target = $target;
    const $h1 = document.createElement("div");
    $h1.innerHTML = `
    <h2>
    userage : ${userage}
    username : ${username}
    </h2>`;
    $target.appendChild($h1);
  }
}
