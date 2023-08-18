/**
 * Let's make a game 🕹
 */

let position: { x: number; y: number } = { x: 0, y: 0 };
type moveCommandType = "up" | "down" | "left" | "right";

const move = (command: moveCommandType) => {
  if (command === "up") position = { ...position, y: position.y + 1 };
  if (command === "down") position = { ...position, y: position.y - 1 };
  if (command === "left") position = { ...position, x: position.x - 1 };
  if (command === "right") position = { ...position, x: position.x + 1 };
};

console.log(position); // { x: 0, y: 0}
move("up");
console.log(position); // { x: 0, y: 1}
move("down");
console.log(position); // { x: 0, y: 0}
move("left");
console.log(position); // { x: -1, y: 0}
move("right");
console.log(position); // { x: 0, y: 0}
