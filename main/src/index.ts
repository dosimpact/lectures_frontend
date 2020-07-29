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

let result: number = ((a: number, b: number): number => a + b)(1, 2);

console.log(result);
