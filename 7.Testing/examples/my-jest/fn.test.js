import { handleInput } from "./index";

describe("mutiple input,output test Guide", () => {
  // ref : https://jestjs.io/docs/api#testeachtablename-fn-timeout
  const testSet = [
    [1, 1, 2],
    [1, 2, 3],
    [2, 1, 3],
  ];
  // mutiple input,output test
  test.each(testSet)(".add(%i, %i)", (a, b, expected) => {
    expect(a + b).toBe(expected);
  });
  test.todo("remove above test");
});

describe("keyword parsing test", () => {
  const testSet = [
    ["normalcase", [["normalcase"], []]],
    ["normalcase!", [["normalcase!"], []]],
    ["comma,seperate", [["comma", "seperate"], []]],
    ["endl\nseperate", [["endl", "seperate"], []]],
    ["toBeLowerCase", [["tobelowercase"], []]],
    ["마우스 패드,마우스패드", [["마우스패드"], []]],
    ["마우스 패드,마우스패드", [["마우스패드"], []]],
    ["ApplePen,Apple Pen\nApple Pen,apple pen,Apple pen", [["applepen"], []]],
  ];
  test.each(testSet)("TC# #% - %s", (i, o) => {
    console.log(i, o);
    // expect(handleInput("hello")).toEqual([[], []]);
    expect(handleInput(i)).toEqual(o);
  });
});
