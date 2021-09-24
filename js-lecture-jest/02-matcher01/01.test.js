const fn = require("./fn");

// tobe, not.tobe
describe("matcher 01 - primitive type ", () => {
  test("1 tobe 1", () => {
    expect(1).toBe(1);
  });
  test("1+2 tobe 3", () => {
    expect(fn.add(1, 2)).toBe(3);
  });
  test("1+2 not tobe 5", () => {
    expect(fn.add(1, 2)).not.toBe(5);
  });
});

// tobe
// toEqual
// toStrictEqual
describe("matcher 02 - object", () => {
  let goalUser;
  beforeAll(() => {
    goalUser = { name: "dodo", age: 20 };
  });
  //✅ 객체를 비교할때는, 프러퍼티까지 같은지 봐야 하므로 , toEqual을 사용한다.
  // - 하지만 undefiend (초기선언상태)의 프로퍼티는 검사 제외
  test("object not tobe (diff addr)", () => {
    expect(fn.makeUser("dodo", 20)).not.toBe(goalUser);
  });

  // ✅ 분명 프로퍼티 중 key:undfined 가 있는데 테스트 통과 된다.
  // - 단,null은 검사를 한다. (의도적 빈 값)
  test("object toEqual (deep equality)", () => {
    expect(fn.makeUser("dodo", 20)).toEqual(goalUser);
  });

  // ✅ undefined 프로퍼티까지 일치하는지 확인할땐 toStrictEqual
  test("object toEqual (deep equality)", () => {
    expect(fn.makeUser("dodo", 20)).not.toStrictEqual(goalUser);
  });
});
