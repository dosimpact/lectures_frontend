// ✅ test 코드 전후에 필요한 코드를 작성할 수 있다.
// beforeAll,afterAll
// beforeEach,afterEach
// -- inner,outter 개념
// describe,test

`
beforeAll (Outter)
    -- describe
    ---- beforeAll()
- beforeEach (Outter)
    ---- beforeEach()
          test()
    ---- afterEach()
- afterEach (Outter)
    ---- beforeAll()
afterAll (Outter)
`;
beforeAll(() => {
  console.log("outter beforeAll");
});
afterAll(() => {
  console.log("outter afterAll");
});

beforeEach(() => {
  console.log("outter beforeEach");
});
afterEach(() => {
  console.log("outter afterEach");
});

test(`test start`, () => {
  expect(0).toBe(0);
});

describe("inner test", () => {
  let counter = 0;

  beforeAll(() => {
    console.log("inner beforeAll");
    counter = 0;
  });
  afterAll(() => {
    console.log("inner afterAll");
    counter = -1;
  });

  beforeEach(() => {
    console.log("inner beforeEach");
    counter += 1;
  });
  afterEach(() => {
    console.log("inner afterEach");
    console.log("done #", counter);
  });

  test(`inner test #${counter}`, () => {
    expect(0).toBe(0);
    console.log("counter", counter);
  });
  test(`inner test #${counter}`, () => {
    expect(0).toBe(0);
    console.log("counter", counter);
  });
});
