import IPerson from "./person/IPerson";
import Chance from "chance";
import * as R from "ramda";
const chance = new Chance();

//  =========== example make array

let names: string[] = R.range(0, 3).map((e: number) => chance.name());

let ages: number[] = R.range(0, 3).map((e: number) => chance.age());

let people: IPerson[] = R.range(0, 3).map((e: number) => ({
  name: chance.name(),
  age: chance.age(),
}));

// make essential memory
interface IMemory {
  counter: number;
  value: number;
}
interface ICalFunc {
  add: (arg0: number) => this;
  sub: (arg0: number) => this;
  getState: (arg0: number, arg1: number) => { counter: number; value: number };
  resetState: () => boolean;
}
// make realize interface
class ThisCal implements IMemory, ICalFunc {
  static SERIRAL = "q1123f2w51sq3z5v8e741g681231q125";
  constructor(public counter: number = 0, public value: number = 0) {
    this.counter = counter;
    this.value = value;
  }
  add(a: number) {
    this.counter += 1;
    this.value += a;
    return this;
  }
  sub(a: number) {
    this.counter += 1;
    this.value -= a;
    return this;
  }
  getState(): { counter: number; value: number } {
    return {
      counter: this.counter,
      value: this.value,
    };
  }
  resetState(): boolean {
    this.counter = 0;
    this.value = 0;
    return true;
  }
}
// test class
let cal01: ThisCal = new ThisCal();
console.log(ThisCal.SERIRAL);
cal01.add(10).add(20).add(30);
console.log(cal01.getState());
cal01.resetState();
console.log(cal01.getState());
