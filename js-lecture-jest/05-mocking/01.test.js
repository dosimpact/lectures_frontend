// ✅ mock function
// -- 외부 환경(API,DB)에 따라 달라지는 테스트 결과는 옳지 않기때문에
// -- Jest의 모킹 함수로 대처를 한다. (함수가 덮어씌어진다.)
// ref: https://jestjs.io/docs/mock-function-api#mockfnmockreturnvalueoncevalue

// ✅ mock 함수에 대한 정보
describe("mock calls", () => {
  const mockFn = jest.fn((num) => num + 1);
  mockFn(0);
  mockFn(1);

  test("mock call", () => {
    // console.log(mockFn.mock);
    // ✅ mockFn.mock 안에 조사
    // {
    // 1. calls로 불렀던 횟수 및 arguments 가 있다.
    //  calls: [ [ 0 ], [ 1 ] ],
    //  instances: [ undefined, undefined ],
    //  invocationCallOrder: [ 1, 2 ],
    // 2. 함수릐 결과를 보여준다.
    //  results: [ { type: 'return', value: 1 }, { type: 'return', value: 2 } ]
    // }
  });
  test("mockFn calls count = 2", () => {
    expect(mockFn.mock.calls.length).toBe(2);
  });
  test("mockFn seconed call with 1", () => {
    expect(mockFn.mock.calls[1][0]).toBe(1);
  });
  test("mockFn results toEqual [1,2] ", () => {
    expect(mockFn.mock.results.map((e) => e.value)).toEqual([1, 2]);
  });
});

// ✅ mock 함수, 리턴값 배번 바구기
// mockReturnValueOnce
describe("mock ReturnValues", () => {
  const mockFn = jest.fn();

  mockFn.mockReturnValueOnce(1);
  mockFn.mockReturnValueOnce(true);
  mockFn.mockReturnValueOnce(false);
  mockFn.mockReturnValue(2);

  test("mockFn return 1", () => {
    expect(mockFn()).toBe(1);
  });
  test("mockFn return true", () => {
    expect(mockFn()).toBe(true);
  });
  test("mockFn return false", () => {
    expect(mockFn()).toBe(false);
  });
  test("mockFn return 2", () => {
    expect(mockFn()).toBe(2);
  });
  test("mockFn return 2 forever", () => {
    expect(mockFn()).toBe(2);
  });
});

// ✅ mock 함수, Promise.resolve 리턴
// mockResolvedValue
describe("mock mockResolvedValue", () => {
  const mockFn = jest.fn();
  mockFn.mockResolvedValue({ name: "dodo", id: "dosimpact" });

  test("mockFn resolve object", () => {
    expect(mockFn()).resolves.toStrictEqual({ name: "dodo", id: "dosimpact" });
  });
});

// ✅ mock 함수, 기존의 함수 덮어쓰기

// 1) 기존 모듈을 임포트 하고, 모듈을 모킹한다.
const fn = require("./fn");
jest.mock("./fn");

// 2) 모킹한 결과값을 만든다.
fn.find.mockResolvedValue({ name: "dodo" });

describe("mock exists function", () => {
  test("fn.find toStrictEqual Object", async () => {
    const result = await fn.find();
    expect(result).toStrictEqual({ name: "dodo" });
  });
});

// ✅ mock 함수, 호출 정보 검사
// toHaveBeenCalled, toBeCalled
// toHaveBeenCalledTimes
// toHaveBeenCalledWith - 해당 인자로 호출된 적이 있는가?
// toHaveBeenLastCalledWith
describe("mock calls", () => {
  const mockFn = jest.fn((num) => num + 1);
  mockFn(0);
  mockFn(1);
  mockFn(2);

  test("mockFn toHaveBeenCalled", () => {
    expect(mockFn).toHaveBeenCalled();
  });
  test("mockFn toHaveBeenCalledTimes", () => {
    expect(mockFn).toHaveBeenCalledTimes(3);
  });
  test("mockFn toHaveBeenCalledWith", () => {
    expect(mockFn).toHaveBeenCalledWith(1);
  });
  test("mockFn toHaveBeenLastCalledWith", () => {
    expect(mockFn).toHaveBeenLastCalledWith(2);
  });
});
