const _ = require("lodash");

const obj1 = { a: null, b: "b", c: null };
const obj2 = { a: "a", b: null, c: null };

const result = _.mergeWith({}, obj1, obj2, (a, b) =>
  b === null ? a : undefined
);

// result: {a: "a", b: "b"}
console.log(result);
