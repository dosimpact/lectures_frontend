const main1 = require("./main1");

describe("main1 solve test", () => {
  it("printState is called", () => {
    const spyFn = jest.spyOn(main1, "printState");
    main1.solve();
    expect(spyFn).toHaveBeenCalled();
  });
});

describe("main1 handleInput test", () => {
  it("handleInput is function", () => {
    expect(typeof main1.handleInput).toBe("function");
  });
  // .toBeStrictEqual
  it("handleInput change state", () => {
    main1.handleInput();
    expect(main1.state).toStrictEqual({
      name: "dodo",
      N: 5,
      M: 10,
    });
  });
});
