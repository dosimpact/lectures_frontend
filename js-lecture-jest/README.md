## 01 install

Javascript 주요 테스팅 라이브러리

- Jest, Cypress, Storybook, Puppeteer, Mocha, Enzyme, Jasmine

Jest 설치하기

- npm i jest -D
- script "test":"jest"

## 02

[ref][https://jestjs.io/docs/expect#tostrictequalvalue]

- toStrictEqual
- 1 e.g. {a: undefined, b: 2} does not match {b: 2}
- 2 [, 1] does not match [undefined, 1]
- 3 A class instance with fields a and b will not equal a literal object with fields a and b. ( obj key 가 다르다. )
