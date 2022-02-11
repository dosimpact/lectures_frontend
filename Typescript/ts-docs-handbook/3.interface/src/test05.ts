interface ClockConstructor {
  new (hour: number, minute: number): any;
}

interface ClockInterface {
  tick(): any;
}

const Clock: ClockConstructor = class Clock implements ClockInterface {
  constructor(h: number, m: number) {}
  tick() {
    console.log("beep beep");
  }
};
