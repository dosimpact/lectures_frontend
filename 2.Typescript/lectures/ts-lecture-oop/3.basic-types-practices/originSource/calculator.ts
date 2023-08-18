/**
 * Let's make a calculator 🧮
 */

type calculateType = "add" | "substract" | "multiply" | "divide" | "remainder";
const calculate = (type: calculateType, a: number, b: number) => {
  if (type === "add") return a + b;
  if (type === "substract") return a - b;
  if (type === "multiply") return a * b;
  if (type === "divide") return a / b;
  if (type === "remainder") return a % b;
  throw Error("not found calcaulate type");
};

console.log(calculate("add", 1, 3)); // 4
console.log(calculate("substract", 3, 1)); // 2
console.log(calculate("multiply", 4, 2)); // 8
console.log(calculate("divide", 4, 2)); // 2
console.log(calculate("remainder", 5, 2)); // 1
console.log(calculate("remainder", 5, 2)); // 1
