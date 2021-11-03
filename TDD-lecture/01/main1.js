let state = {};

exports.printState = function printState() {
  console.log("printState", state);
};

exports.solve = function solve() {
  exports.printState();
};

exports.handleInput = function handleInput() {
  exports.state = {
    name: "dodo",
    N: 5,
    M: 10,
  };
};

exports.state = state;
