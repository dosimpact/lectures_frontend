// only
// -- 모든 테스트영역에서 벗어나 only테스트만 작동시킨다.
describe("only test #1", () => {
  //   test.only("test #1", () => {
  //     expect(1).toBe(1);
  //   });
  //   test.only("test #2", () => {
  //     expect(1).toBe(1);
  //   });
  test("test #3", () => {
    expect(1).toBe(1);
  });
});

// skip
// -- 테스트 스킵
describe("only test #2", () => {
  test.skip("test #1", () => {
    expect(1).toBe(1);
  });
  test("test #2", () => {
    expect(1).toBe(1);
  });
  test("test #3", () => {
    expect(1).toBe(1);
  });
});
