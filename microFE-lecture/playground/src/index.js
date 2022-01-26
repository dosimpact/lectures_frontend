import faker from "faker";
import "./styles/style.css";

console.log("index.js");
console.log(`product : ${faker.commerce.product()}`);

let products = "";

for (let i = 0; i < 5; i++) {
  const name = faker.commerce.productName();
  products += `<div>${name}</div>`;
}

document.querySelector("#dev-products").innerHTML = products;
