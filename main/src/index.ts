import IPerson from "./person/IPerson";
import Chance from "chance";
import * as R from "ramda";
const chance = new Chance();

//  =========== example make array

let names: string[] = R.range(0, 3).map((e: number) => chance.name());

console.log(names);

let ages: number[] = R.range(0, 3).map((e: number) => chance.age());

console.log(ages);

let people: IPerson[] = R.range(0, 3).map((e: number) => ({
  name: chance.name(),
  age: chance.age(),
}));

// =========== example  split string    to string[]   : split
// =========== example  split string[]  to string     : join

const split = (str: string, delim: string = ""): string[] => str.split(delim);

console.log(split("h,e,llo", ","));

const join = (str: string[], delim: string = ""): string => str.join(delim);

console.log(join(["hello", "world"], "|"));

// =========== example  for...in | for...of |

for (const idx in names) {
  console.log(names[idx]);
}

for (const name of names) {
  console.log(name);
}

for (const [idx, name] of names.entries()) {
  console.log(`[${idx}] : ${name}`);
}

for (const person of people) {
  console.log(person);
}
