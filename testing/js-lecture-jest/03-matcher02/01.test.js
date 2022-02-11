const fn = require("./fn");

// toMatch
describe("matcher 01 - RegExpress ", () => {
  test("startwith H", () => {
    expect("Hell world").toMatch(/^H/);
  });
  test("startwith H or h", () => {
    expect("Hell world").toMatch(/^h/i);
  });
});

// toContain
describe("matcher 02 - array", () => {
  test("[A,B,C] Contain A", () => {
    expect(["A", "B", "C"]).toContain("A");
  });
});

// toThrow
describe("matcher 03 - Error", () => {
  test("must throw Error", () => {
    expect(() => {
      throw new Error();
    }).toThrow();
  });

  test("must throw Error with Message", () => {
    expect(() => {
      throw new Error("Message");
    }).toThrow("Message");
  });
});

// 비동기 1 - 콜백
describe("matcher 04 - callback", () => {
  const getUser = (cb) => {
    setTimeout(() => {
      cb("dodo");
    }, 500);
  };

  test("callback eval", (done) => {
    const callback = (name) => {
      expect(name).toBe("dodo");
      done();
    };
    // ✅ 콜백함수를 쓴다면 done으로 테스트종료를 명시할 것
    getUser(callback);
  });
});

// 비동기 2 - Promise then,catch
// resolves
// rejects

//❌ https://ko.javascript.info/promise-error-handling
// -- Promise안의 setTimeout의 애러는 못잡는다,
// -- 애러는 executor(실행자, 실행 함수)가 실행되는 동안이 아니라 나중에 발생합니다.
// -- 따라서 프라미스는 에러를 처리할 수 없습니다.

describe("matcher 05 - Promise", () => {
  const getUser = async () =>
    new Promise((res, rej) => {
      setTimeout(() => {
        res("dodo");
      }, 500);
    });

  test("Promise return then", () => {
    // return expect(getUser()).toBe("dodo");
    // ✅ 반드시 (Promise).then.catch 를 리턴하도록 해야 검사된다.
    return getUser().then((name) => {
      expect(name).toBe("dodo");
    });
  });

  test("Promise resolves dodo", () => {
    expect(Promise.resolve("dodo")).resolves.toBe("dodo");
  });

  test("Promise rejects korea", () => {
    expect(Promise.reject("korea")).rejects.toBe("korea");
  });

  test("rejects to octopus", () => {
    return expect(Promise.reject(new Error("octopus"))).rejects.toThrow(
      "octopus"
    );
  });
});

// 비동기 3 - async,await
describe("matcher 06 - async,await", () => {
  const getUser = async () =>
    new Promise((res, rej) => {
      res("dodo");
    });
  test("async result is dodo", async () => {
    const res = await getUser();
    expect(res).toBe("dodo");
  });
});
