// import Person, { makePerson } from "./person/Person";
// import IPerson from "./person/IPerson";

import { F } from "ramda";
import { generateKeyPair } from "crypto";

// import Chance from "chance";
// import * as R from "ramda";

// const change = new Chance();
// let persons: IPerson[] = R.range(0, 2).map(
//   (n: number) => new Person(change.name(), change.age())
// );
// console.log(persons);

// const testMakePerson = (): void => {
//   let dos: IPerson = makePerson("dos");
//   let dos_2: IPerson = new Person("dos2");
//   console.log(dos, dos_2);
// };

// testMakePerson();

// 고차 함수 : 함수 실행 결과 또 함수를 반환한다.

const multiply = (a: number) => (b: number) => (c: number) => a * b * c;

console.log(multiply(11)(2)(3)); // 66

const add = (a: number) => (b: number): number => a + b;

console.log(add(10)(20)); // 30

type keyType = {
  [key: string]: string;
};
