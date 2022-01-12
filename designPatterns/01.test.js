const { LinkedList } = require("./ds/LinkedList");

describe("linkedList base test", () => {
  beforeAll(() => {
    console.log("beforeAll");
  });

  test("LinkedList constructoror", () => {
    expect(typeof LinkedList).toBe("function");
  });

  test("LinkedList constructor return object", () => {
    const linkedList = new LinkedList();
    expect(linkedList).toBeDefined();
    expect(typeof linkedList).toBe("object");
    expect(linkedList instanceof LinkedList).toBeTruthy();
  });
  //   test("insertFirst", () => {});
  //   test("insertLast", () => {});
  //   test("printListData", () => {});
});
