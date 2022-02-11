const add = (a, b) => a + b;
const makeUser = (name, age) => ({
  name,
  age,
  gender: undefined,
});

module.exports = {
  add,
  makeUser,
};
