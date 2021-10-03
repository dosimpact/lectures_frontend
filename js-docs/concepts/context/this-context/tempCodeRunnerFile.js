function foo2() {
  setTimeout(() => {
    console.log(this.a);
  }, 100);
}
let obj = {
  a: 20,
};
foo2.call(obj);
foo2.call({ a: 30 });
