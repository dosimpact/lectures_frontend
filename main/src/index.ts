// import Person, { makePerson } from "./person/Person";
// import IPerson from "./person/IPerson";

import { F } from "ramda";

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
// let part1 = { name: "jane" },
//   part2 = { age: 22 },
//   part3 = { city: "Seoul", country: "Kr" };

// let merged = { ...part1, ...part2, ...part3 };
// console.log(merged); // { name: 'jane', age: 22, city: 'Seoul', country: 'Kr' }

// let coord = { ...{ x: 0 }, ...{ y: 0 } };
// console.log(coord); // {x:0, y: 0}

import IPerson from "./person/IPerson";
import Person, { makePerson } from "./person/Person";
const test = (): void => {
  let person01 = new Person("doyoung", 12);
  console.log(person01);
  let person02 = makePerson("dododoyoung", 21);
  console.log(person02);
};

test();
