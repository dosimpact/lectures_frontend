// import { add } from ""
const { add, makePerson, Person, throwErrorer } = require("./fn");

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

// 3
// toBeNull
// toBeUndefined
// toBeDefined
test("should tobeNull", () => {
  expect(null).toBeNull();
});

test("should toBeUndefined", () => {
  expect(undefined).not.toBeNull();
});

// 4
// toBeTruthy
// tobeFalsy
test("should be True", () => {
  expect(true).toBeTruthy();
});

// 5
// toBeGreaterThan (>)
// toBeGreaterThanOrEqual (>=)
// toBeLessThan (<)
// toBeLessThanOrEqual (<=)

// toBeCloseTo
test("ounces per can is at most 12", () => {
  expect(2).toBeLessThanOrEqual(12);
});

test("toBeCloseTo", () => {
  expect(2 + 3).toBeCloseTo(5.000001);
});

// 6
// toMatch
// toContain
test("should toMatch", () => {
  const SSN = "960101";
  expect(SSN.length).toBe(6);
  expect(SSN).toMatch(/^[0-9]*$/);
});

test("the flavor list contains lime", () => {
  const getAllFlavors = ["lime", "lemon", "berry"];
  expect(getAllFlavors).toContain("lime");
});

// 7
// toThrow
// toThrowError(alias toThrow)

// 해당 함수가 애러를 출력하는건 맞다.
test("throws on octopus", () => {
  expect(() => {
    throwErrorer("octopus");
  }).toThrow();
});
// 어떤 애러 객체인지까지 검사하려면 애러객체도 넣을것
test("throws on octopus", () => {
  expect(() => {
    throwErrorer("octopus");
  }).toThrowError(new Error("octopus"));
});
