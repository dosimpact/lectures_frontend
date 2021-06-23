// import { add } from ""
const { add, makePerson, Person } = require("./fn");

// import adder from ""
// const adder = require("./fn");

// 1
// toBe
test("should one", () => {
  expect(1).toBe(1);
});

test("should 1+1", () => {
  expect(add(1, 1)).toBe(2);
});

test("should 2+3", () => {
  expect(add(2, 3)).toBe(5);
});

// 2
// toEqual
// toStrictEqual
test("toEqual", () => {
  expect(makePerson(24, "dodo")).toEqual({
    name: "dodo",
    age: 24,
  });
});
// 객체의 object는 동일
test("toStrictEqual", () => {
  expect(makePerson(24, "dodo")).toStrictEqual({
    name: "dodo",
    age: 24,
  });
});

// 생성된 객체는 key가 다르다.
test("toStrictEqual", () => {
  expect(new Person(24, "dodo")).not.toStrictEqual({
    name: "dodo",
    age: 24,
  });
});
