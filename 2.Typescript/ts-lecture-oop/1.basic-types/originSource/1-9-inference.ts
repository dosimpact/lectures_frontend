/**
 * Type Inference
 */

// Inference result : string
let text = "hello";

// Inference result : any , when default parameter not eixst
function print(message = "hello") {
  console.log(message);
}
print("hello");

// Inference result : number , number + number => number
function add(x: number, y: number): number {
  return x + y;
}
const result = add(1, 2);
