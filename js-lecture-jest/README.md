## 01 install

- npm i jest
- script "jest":"jest"

```js
const add = (a, b) => a + b;

// export func
module.exports = { add };

// export default func
// module.exports = add;
```

- fn.test.js;
- name convention

```js
// import { add } from ""
const { add } = require("./fn");

// import adder from ""
// const adder = require("./fn");

test("should one", () => {
  expect(1).toBe(1);
});

test("should 1+1", () => {
  expect(add(1, 1)).toBe(2);
});

test("should 2+3", () => {
  expect(add(2, 3)).toBe(5);
});
```

## 02

[ref][https://jestjs.io/docs/expect#tostrictequalvalue]

- toStrictEqual
- 1 e.g. {a: undefined, b: 2} does not match {b: 2}
- 2 [, 1] does not match [undefined, 1]
- 3 A class instance with fields a and b will not equal a literal object with fields a and b. ( obj key 가 다르다. )
