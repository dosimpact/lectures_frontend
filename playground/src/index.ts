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

// class Location {}
