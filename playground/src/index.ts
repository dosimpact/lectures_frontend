import IPerson from "./person/IPerson";
import Chance from "chance";
import * as R from "ramda";
const chance = new Chance();

class Human {
  public name: string;
  public age: number;
  public gender: string;
  constructor(name: string, age: number, gender: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  printProfile() {
    return `[${this.name}의 프로파일] ${this.age} - ${this.gender} `;
  }
}

const dos = new Human("DSO", 24, "남");
console.log(dos.printProfile());

//  =========== example make array

let names: string[] = R.range(0, 3).map((e: number) => chance.name());

let ages: number[] = R.range(0, 3).map((e: number) => chance.age());

let people: IPerson[] = R.range(0, 3).map((e: number) => ({
  name: chance.name(),
  age: chance.age(),
}));

// example make R.range

const range = (from: number, to: number): number[] =>
  from < to ? [from, ...range(from + 1, to)] : [];

// example make fold function ( like reducer )
const fold = <T>(
  array: T[],
  callback: (result: T, val: T) => T,
  initValue: T
) => {
  let result: T = initValue;
  for (let i = 0; i < array.length; ++i) {
    const value = array[i];
    result = callback(result, value);
  }
  return result;
};

let result = fold(
  range(0, 101),
  (result, value) => {
    return value % 2 === 0 ? result : result + value;
  },
  0
);
console.log(result);

// example filter
const filter = <T>(
  array: T[],
  callback: (value: T, index?: number) => boolean
): T[] => {
  let result: T[] = [];
  for (let index: number = 0; index < array.length; index++) {
    const value = array[index];
    if (callback(value, index)) result = [...result, value];
  }
  return result;
};

let oddRes = filter(range(0, 11), (e, idx) => (e % 2 == 0 ? true : false));
console.log(oddRes);

// example map

const RSP = {
  R: -1,
  S: 0,
  P: 1,
} as const;
console.log(RSP);
type keysOfRPS = keyof typeof RSP;
type valsOfRPS = typeof RSP[keysOfRPS];
