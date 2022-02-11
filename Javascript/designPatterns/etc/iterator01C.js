class MyArray {
  #index = 0;
  constructor(size) {
    this.size = size;
    this.elements = new Array(this.size).fill(0).map((e, idx) => idx + 1);
  }
  rewind() {
    this.#index = 0;
  }
  hasNext() {
    return this.#index < this.size;
  }
  next() {
    const e = this.elements[this.#index];
    this.#index += 1;
    return e;
  }
  current() {
    return this.elements[this.#index];
  }
}

const myArray = new MyArray(10);
console.log(myArray);
while (myArray.hasNext()) {
  console.log(myArray.next());
}
console.log(myArray.current());
console.log(myArray.hasNext());
