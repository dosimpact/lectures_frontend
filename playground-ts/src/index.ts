class Control {
  protected state: any;
}

// class를 상속받는다면 구현부는 제거된다.
interface SelectableControl extends Control {
  select(): number;
}

class Button extends Control implements SelectableControl {
  select() {
    return this.state;
  }
}

class TextBox extends Control {
  select() {}
}

// Error: Property 'state' is missing in type 'Image'.
// class Image implements SelectableControl {
//   private state: any;
//   select() {}
// }

// example map

const RSP = {
  R: -1,
  S: 0,
  P: 1,
} as const;
console.log(RSP);
type keysOfRPS = keyof typeof RSP;
type valsOfRPS = typeof RSP[keysOfRPS];
