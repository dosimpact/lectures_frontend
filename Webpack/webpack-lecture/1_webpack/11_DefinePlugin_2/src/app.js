import "./app.css";
import nycat from "./nyancat.jpg";

document.addEventListener("DOMContentLoaded", () => {
  document.body.innerHTML = `
    <img src=${nycat} ></img>
    `;
});

console.log(process.env.NODE_ENV);
console.log(process.env.TWO);
console.log(TWO);
console.log(TRHEE);
console.log(api.domain);
