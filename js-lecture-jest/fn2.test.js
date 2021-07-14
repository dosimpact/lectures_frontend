const { someCallback } = require("./fn2");

// 1
// callback test + done
// 콜백 후 done expect를 처리하고, done으로 종료
// 5초 이내에 응답해야한다.
test("shoud be callback ", (done) => {
  const callback = (name) => {
    expect(name).toBe("dodo");
    done();
  };
  someCallback(callback);
});

// 2
// promise 처리 (리턴으로)
// resolves, rejects

// 3
// async, await 구문으로
