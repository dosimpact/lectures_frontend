import "./app.css";
import nycat from "./nyancat.jpg";

document.addEventListener("DOMContentLoaded", () => {
  document.body.innerHTML = `
    <img src=${nycat} ></img>
    `;
});
