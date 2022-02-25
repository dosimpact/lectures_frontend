// ✅ MyArray 라는 모듈패턴을 정의합니다.

//
const MyArray = (function () {
  function MyArray(size) {
    // public property
    this.size = size || 0;
    this.Elements = new Array(this.size).fill(0).map((e, idx) => idx + 1);
    // private property
    // this.index = 0;
    let index = 0;
  }

  MyArray.prototype.next = function () {
    if (this.index < this.size) {
      var e = this.Elements[this.index];
      this.index += 1;
      return e;
    }
    return null;
  };
  MyArray.prototype.hasNext = function () {
    return this.index < this.size;
  };
  MyArray.prototype.rewind = function () {
    this.index = 0;
  };
  MyArray.prototype.current = function () {
    return this.Elements[this.index];
  };

  return MyArray;
})();

const myArray = new MyArray(10);
console.log(myArray);
while (myArray.hasNext()) {
  console.log(myArray.next());
}
console.log(myArray.current());
console.log(myArray.hasNext());
