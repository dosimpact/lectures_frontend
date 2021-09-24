// ✅ 함수를 정의한다.
const add = (a, b) => a + b;
const makeUser = (name, age) => {
  return { name, age, gender: undefined };
};
module.exports = { add, makeUser };
